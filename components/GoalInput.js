import { StyleSheet, View, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";

const GoalInput = ({ setListData }) => {
  const [enterGoalsText, setEnterGoalText] = useState("");

  function handleChange(enterText) {
    setEnterGoalText(enterText);
    console.log(enterText);
  }
  // list showing
  function addGoalHandler() {
    setListData((CurrentlistData) => [...CurrentlistData, enterGoalsText]);
    console.log(enterGoalsText);
  }
  function deleteGoalHandler() {
    setListData((CurrentlistData) => [...CurrentlistData, enterGoalsText]);
    console.log(enterGoalsText);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your Goals"
        style={styles.TextInput}
        onChangeText={handleChange}
      />
      <Button title="Add Goal" color={"#441752"} onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#A888B5",
    alignItems: "center",
    paddingBottom: 30,
    borderBottomWidth: 1,
  },
  TextInput: {
    padding: 10,
    paddingRight: 20,
    borderWidth: 1,
    width: "70%",
    marginRight: "10",
    borderRadius: 5,
  },
});
