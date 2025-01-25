import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  // Dummy data
  const stats = [
    { id: "1", title: "Total Users", value: 1250 },
    { id: "2", title: "Active Sessions", value: 320 },
    { id: "3", title: "Revenue", value: "$12,500" },
  ];

  const activities = [
    { id: "1", activity: "User John Doe signed up." },
    { id: "2", activity: "New payment of $145 received." },
    { id: "3", activity: "Session timeout for User Jane." },
    { id: "4", activity: "Admin added a new announcement." },
    { id: "5", activity: "Password reset request for User Alex." },
    { id: "6", activity: "User Emily updated her profile." },
    { id: "7", activity: "Subscription renewed by User Mike." },
    { id: "8", activity: "User Sam posted a new comment." },

    { id: "9", activity: "New order placed by User Chloe." },
    { id: "10", activity: "Admin deleted an old announcement." },
    { id: "11", activity: "Session timeout for User Jane." },
    { id: "12", activity: "New payment of $320 received." },
    { id: "13", activity: "User John Doe signed up." },
    { id: "14", activity: "User Emily updated her profile." },
    { id: "15", activity: "Admin added a new announcement." },
    { id: "16", activity: "Password reset request for User Alex." },

    { id: "17", activity: "Subscription renewed by User Mike." },
    { id: "18", activity: "User Sam posted a new comment." },
    { id: "19", activity: "Admin deleted an old announcement." },
    { id: "20", activity: "Session timeout for User Jane." },
    { id: "21", activity: "New payment of $215 received." },
    { id: "22", activity: "User John Doe signed up." },
    { id: "23", activity: "New order placed by User Chloe." },
    { id: "24", activity: "User Emily updated her profile." },

    { id: "25", activity: "Admin added a new announcement." },
    { id: "26", activity: "Password reset request for User Alex." },
    { id: "27", activity: "Subscription renewed by User Mike." },
    { id: "28", activity: "User Sam posted a new comment." },
    { id: "29", activity: "New payment of $180 received." },
    { id: "30", activity: "Admin deleted an old announcement." },
    { id: "31", activity: "Session timeout for User Jane." },
    { id: "32", activity: "User John Doe signed up." },

    { id: "33", activity: "User Emily updated her profile." },
    { id: "34", activity: "Subscription renewed by User Mike." },
    { id: "35", activity: "New order placed by User Chloe." },
    { id: "36", activity: "Admin added a new announcement." },
    { id: "37", activity: "Password reset request for User Alex." },
    { id: "38", activity: "User Sam posted a new comment." },
    { id: "39", activity: "Session timeout for User Jane." },
    { id: "40", activity: "New payment of $275 received." },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollContainer}>
          <Text style={styles.header}>Dashboard</Text>
          {/* Stats Section */}
          <View style={styles.statsContainer}>
            {stats.map((stat) => (
              <Card style={styles.card} key={stat.id}>
                <Text style={styles.cardTitle}>{stat.title}</Text>
                <Text style={styles.cardValue}>{stat.value}</Text>
              </Card>
            ))}
          </View>

          {/* Recent Activities Section */}
          <View style={styles.activitiesContainer}>
            <Text style={styles.subHeader}>Recent Activities</Text>
            <FlatList
              data={activities}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.activityItem}>
                  <Text>{item.activity}</Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  ScrollContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "800",
    color: "#EFB036",
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  card: {
    flex: 1,
    marginHorizontal: 8,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontSize: 16,
    color: "#4C7B8B",
    fontWeight: "800",
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  activitiesContainer: {
    marginTop: 16,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  activityItem: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
  },
});

export default App;

// import React, { useState } from "react";
// import GoalItems from "./components/GoalItems";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
// } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import GoalInput from "./components/GoalInput";

// const App = () => {
//   const [listDatas, setListData] = useState([]);

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container}>
//         <View style={styles.appContainer}>
//           <Text
//             style={{
//               fontSize: 35,
//               margin: "auto",
//               paddingBottom: 50,
//               fontWeight: 900,
//               color: "#441752",
//             }}
//           >
//             To-Do App
//           </Text>
//           <GoalInput setListData={setListData} listDatas={listDatas} />
//           <View>
//             <View style={styles.goalContainer}>
//               {/* using flat list the alternative of scrollview and map() function key pair  */}
//               <FlatList
//                 data={listDatas}
//                 renderItem={(itemData) => {
//                   return (
//                     <GoalItems itemData={itemData} />
//                   );
//                 }}
//                 scrollPerfTag="MyScrollView"
//               />
//             </View>
//           </View>
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   appContainer: {
//     paddingHorizontal: 20,
//   },
//   container: {
//     flex: 1,
//     paddingTop: 30,
//   },
//   goalContainer: {
//     paddingTop: "30",
//   }
// });
