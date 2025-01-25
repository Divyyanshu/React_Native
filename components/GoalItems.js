import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItems({ itemData }) {
  function deleteGoalHandle() {
    console.log("del");
  }

  return (
    <Pressable onPress={deleteGoalHandle}>
      <View style={styles.goalItems}>
        <Text style={styles.goalText}>{itemData.item}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItems;

const styles = StyleSheet.create({
  goalItems: {
    marginHorizontal: 20,
    margin: 5,
    padding: 10,
    backgroundColor: "#A888B5",
    color: "white",
    fontWeight: 800,
    fontSize: 18,
    borderRadius: 5,
  },
  goalText: {
    color: "white",
    fontWeight: 800,
    fontSize: 18,
  },
});
