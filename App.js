import React, { useState } from "react";
import GoalItems from "./components/GoalItems";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [listDatas, setListData] = useState([]);

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
          <GoalInput setListData={setListData} listDatas={listDatas} />
          <View>
            <View style={styles.goalContainer}>
              {/* using flat list the alternative of scrollview and map() function key pair  */}
              <FlatList
                data={listDatas}
                renderItem={(itemData) => {
                  return (
                    <GoalItems itemData={itemData} />
                  );
                }}
                scrollPerfTag="MyScrollView"
              />
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
  goalContainer: {
    paddingTop: "30",
  }
});
