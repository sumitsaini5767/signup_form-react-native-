import { View, Text, TextInput, StyleSheet } from "react-native";

export default function InputField(props) {
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.inputstyle}
        value={props.textValue}
        placeholder={props.placeholder}
        onChangeText={props.change}
        secureTextEntry={props.showPassword}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    // marginTop: 15,
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  inputstyle: {
    height: 45,
    color: "white",
    fontSize: 20,
    width: "80%",
    justifyContent: "center",
    backgroundColor: "rgba(209, 221, 232, 0.75)",
    paddingLeft: 20,
    borderRadius: 10,
  },
});
