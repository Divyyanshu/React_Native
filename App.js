import React, { useState } from "react";
import GoalItems from "./components/GoalItems";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [listDatas, setListData] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function ModelClicker() {
    setModelIsVisible(true);
    console.log("model click");
  }
  // list showing
  function addGoalHandler(enterGoalsText) {
    setListData((currentListData) => [
      ...currentListData,
      { text: enterGoalsText, id: Math.random().toString() },
    ]);
    cancelGoalHandler();
  }
  function cancelGoalHandler() {
    setModelIsVisible(false);
    console.log("can");
  }

  function deleteGoalHandle(id) {
    setListData((currentListData) => {
      return currentListData.filter((goal) => goal.id !== id);
    });
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.appContainer}>
          <Text
            style={{
              fontSize: 35,
              margin: "auto",
              paddingBottom: 50,
              fontWeight: "900",
              color: "#323232",
            }}
          >
            TRACK YOUR GOALS
          </Text>
          {/* <Button title="Add the Goals" color="#041949" onPress={ModelClicker} /> */}
          <TouchableOpacity style={styles.button} onPress={ModelClicker}>
            <Text style={styles.buttonText}>Add New Goals</Text>
          </TouchableOpacity>
          {modelIsVisible && (
            <GoalInput
              onAddGoal={addGoalHandler}
              visible={modelIsVisible}
              onCancel={cancelGoalHandler}
            />
          )}
          <View style={styles.goalContainer}>
            {/* using flat list the alternative of scrollview and map() function key pair  */}
            <FlatList
              data={listDatas}
              renderItem={(itemData) => {
                return (
                  <GoalItems
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandle}
                  />
                );
              }}
              keyExtractor={(item) => {
                return item.id;
              }}
              alwaysBounceVertical={true}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingTop: 30,
  },
  goalContainer: {
    paddingTop: "30",
  },
  buttonText: {
    color: "white",
    padding: 20,
    width: 200,
    margin: "auto",
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#041949",
    fontWeight: "bold",
    textAlign: "center",
  },
});
