import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [enterGoalsText, setEnterGoalText] = useState("");
  const [listDatas, setListData] = useState([]);
  function handleChange(enterText) {
    setEnterGoalText(enterText);
    console.log(enterText);
  }
  // list showing
  function handleClick() {
    setListData((currentlistData) => [...currentlistData, enterGoalsText]);
    console.log(enterGoalsText);
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
              fontWeight: 900,
              color: "#441752",
            }}
          >
            To-Do App
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter your Goals"
              style={styles.TextInput}
              onChangeText={handleChange}
            />
            <Button title="Add Goal" color={"#441752"} onPress={handleClick} />
          </View>
          <View>
            <View style={styles.goalContainer}>
              {/* using flat list the alternative of scrollview and map() function key pair  */}
              <FlatList
                data={listDatas}
                renderItem={(itemData) => {
                  return (
                    <View style={styles.goalItems}>
                      <Text style={styles.goalText}>{`${(index =
                        itemData.index + 1)}.${itemData.item}`}</Text>
                    </View>
                  );
                }}
                scrollPerfTag="MyScrollView"
              ></FlatList>
            </View>
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
  goalContainer: {
    paddingTop: "30",
  },
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
