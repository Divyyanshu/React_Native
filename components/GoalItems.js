import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItems(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#051d56" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItems;

const styles = StyleSheet.create({
  goalItems: {
    marginHorizontal: 20,
    margin: 5,
    padding: 10,
    backgroundColor: "#f4f4f4",
    color: "#323232",
    fontWeight: 800,
    fontSize: 16,
    borderRadius: 10,
  },
  goalText: {
    color: "#323232",
    fontWeight: 800,
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
