import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Mybtn({ validFn }) {
  return (
    <TouchableOpacity
      onPress={() => {
        validFn();
      }}
    >
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            color: "rgba(243, 243, 243, 1.0)",
            fontWeight: 900,
          }}
        >
          CONFIRM
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    padding: 10,
    marginTop: 25,
    borderWidth: 5,
    borderColor: "#cdd4df",
    backgroundColor: "black",
    borderTopLeftRadius: 15,
    borderBottomEndRadius: 15,

    shadowColor: "white",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
});
