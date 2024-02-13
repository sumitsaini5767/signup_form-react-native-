import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import InputField from "./src/component/InputField";
import { useState } from "react";
import Mybtn from "./src/component/Mybtn";

export default function App() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showCpassword, setShowcpassword] = useState(true);

  let error = [];
  let valid = [];

  function validFn() {
    //username
    if (userName.trim() == "") {
      error.push("Username Required ❌");
    } else if (userName.length < 3) {
      error.push("Username must be of three character atleaset ❌");
    } else if (!userName.match(/^[A-Za-z0-9]+$/)) {
      error.push("Username must be alphabets and numbers only ❌");
    } else {
      valid.push("Username ✅");
    }

    //firstname
    if (fName.trim() == "") {
      error.push("Firstname Required ❌");
    } else if (fName.length < 3) {
      error.push("Firstname must be of three character atleaset ❌");
    } else if (!fName.match(/^[A-Za-z]+$/)) {
      error.push("Firstname must be alphabets ❌");
    } else {
      valid.push("Firstname ✅");
    }

    //Lastname
    if (lName.trim() == "") {
      error.push("Lastname Required ❌");
    } else if (lName.length < 3) {
      error.push("Lastname must be of three character atleaset ❌");
    } else if (!lName.match(/^[A-Za-z]+$/)) {
      error.push("Lastname must be alphabets ❌");
    } else {
      valid.push("Lastname ✅");
    }

    //email
    if (email.trim() == "") {
      error.push("Email Required ❌");
    } else if (email.length < 5) {
      error.push("Email must be of five character atleaset ❌");
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      error.push("Email must be alphabets ❌");
    } else {
      valid.push("Email ✅");
    }

    //password
    if (password.trim() == "") {
      error.push("Password Required ❌");
    } else if (
      !password.match(
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
      )
    ) {
      error.push(
        "Password must contain 8 charater with atleast one(special character,uppercase,lowercase,number) ❌"
      );
    } else {
      valid.push("Password ✅");
    }

    //confirmpassword
    if (cPassword.trim() == "") {
      error.push("Confirm Password Required ❌");
    } else if (!(cPassword == password)) {
      error.push("password not matched ❌");
    } else {
      valid.push("Confirm Password ✅");
    }

    if (error.length != 0) {
      let gap = "";
      if (valid.length != 0) {
        gap = "\n\n";
      }
      alert(`${valid.join("\n\n")}${gap}${error.join("\n\n")}`);
      error.length = 0;
    } else {
      alert(
        `Firstname: ${fName}\n\nLastname: ${lName}\n\nUsername: ${userName}\n\nEmail: ${email}`
      );
      setfName("");
      setlName("");
      setUserName("");
      setEmail("");
      setPassword("");
      setCPassword("");
    }
  }

  return (
    <ScrollView contentContainerStyle={{}}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.png")}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <Image style={styles.imgStyle} source={require("./icon.png")} />
          <View style={{ marginTop: 25 }}>
            <InputField
              textValue={userName}
              placeholder="Username"
              change={setUserName}
            />
            <View style={styles.parentView}>
              <View style={{ width: "45%" }}>
                <InputField
                  textValue={fName}
                  placeholder="First Name"
                  change={setfName}
                />
              </View>
              <View style={{ width: "45%" }}>
                <InputField
                  textValue={lName}
                  placeholder="Last Name"
                  change={setlName}
                />
              </View>
            </View>
            <InputField
              textValue={email}
              placeholder="Email"
              change={setEmail}
            />

            <View>
              <InputField
                textValue={password}
                placeholder="Password"
                change={setPassword}
                showPassword={showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: 55, top: 5 }}
              >
                <View>
                  <Image
                    source={
                      showPassword
                        ? require("./show.png")
                        : require("./hide.png")
                    }
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <InputField
                textValue={cPassword}
                placeholder="Confirm Password"
                change={setCPassword}
                showPassword={showCpassword}
              />
              <TouchableOpacity
                onPress={() => setShowcpassword(!showCpassword)}
                style={{ position: "absolute", right: 55, top: 5 }}
              >
                <View>
                  <Image
                    source={
                      showCpassword
                        ? require("./show.png")
                        : require("./hide.png")
                    }
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <Mybtn validFn={validFn} />
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height + 40,
  },
  imgStyle: {
    height: "15%",
    width: "25%",
    marginTop: "20%",
    alignSelf: "center",
  },
  parentView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});
