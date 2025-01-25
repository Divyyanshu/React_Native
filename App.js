import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ padding: "50", flexDirection: "column" , justifyContent : "space-around" , }}>
      <View style={styles.textContainer1}>
        <Text style={{ fontSize: 50 }}>1</Text>
      </View>
      <View style={styles.textContainer2}>
        <Text style={{ fontSize: 50 }}>2</Text>
      </View>
      <View style={styles.textContainer3}>
        <Text style={{ fontSize: 50 }}>3</Text>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  textContainer1: {
    backgroundColor: "red",
    fontSize: 50,
    // width: 200,
    // height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer2: {
    backgroundColor: "green",
    // width: 200,
    // height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer3: {
    backgroundColor: "blue",
    // width: 200,
    // height: 200,
    justifyContent: "center",
    alignItems: "center"
  }
})