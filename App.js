import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [enterGoalsText, setEnterGoalText] = useState('');
  const [listDatas, setListData] = useState([])
  function handleChange(enterText) {
    setEnterGoalText(enterText)
    console.log(enterText)
  }
  // list showing
  function handleClick() {
    setListData((currentlistData) => [...currentlistData, enterGoalsText])
    console.log(enterGoalsText)
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.appContainer}>
          <Text style={{ fontSize: 35, margin: "auto", paddingBottom: 50, fontWeight: 900, color: "#d52583", fontFamily: "" }}>Task Adder-Deleter</Text>
          <View style={styles.inputContainer} >
            <TextInput placeholder='Enter your Goals' style={styles.TextInput} onChangeText={handleChange} />
            <Button title='Add Goal' color={"#d52583"} onPress={handleClick} />
          </View>
          <View style={styles.goalContainer}>
            {listDatas?.map((listData, index) => <Text style={{ fontWeight: 800, fontSize: 18 }}>{`${index} . ${listData}`}</Text>)}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingTop: 30
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#cccccc",
    alignItems: "center",
    paddingBottom: 30,
    borderBottomWidth: 1,
  },
  TextInput: {
    padding: 10,
    paddingRight: 20,
    borderWidth: 1,
    width: '70%',
    marginRight: "10",
    borderRadius: 5,
  },
  goalContainer: {
    paddingTop: "30",
  }
})