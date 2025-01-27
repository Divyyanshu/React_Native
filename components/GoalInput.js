import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";

const GoalInput = (props) => {
  const [enterGoalsText, setEnterGoalText] = useState("");

  function handleChange(enterText) {
    setEnterGoalText(enterText);
    console.log(enterText);
  }
  function addGoalHandler() {
    props.onAddGoal(enterGoalsText);
    setEnterGoalText("");
    console.log("add task");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.modelContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your Goals Enter Here !"
            style={styles.TextInput}
            onChangeText={handleChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          {/* <Button title="Add Goal" color={"#041949"} onPress={addGoalHandler} /> */}
          <TouchableOpacity style={styles.button} onPress={addGoalHandler}>
            <Text style={styles.buttonText}>Add Goals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={props.onCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  modelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    marginBottom: 24,
    width: 400,
    alignItems: "center",
    marginBottom: 5,
  },
  TextInput: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: "black",
    fontSize: 16,
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    gap: 20,
    flexDirection: "row",
  },
  buttonText: {
    color: 'white',
    paddingVertical : 10,
    paddingHorizontal : 18,
    borderRadius : 10,
    fontSize: 16,
    backgroundColor : "#041949",
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
