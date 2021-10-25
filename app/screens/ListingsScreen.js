import React from "react";
import { FlatList, StyleSheet } from "react-native";

import AppCard from "../components/AppCard";
import Screen from "../components/Screen";

const listItems = [
  {
    id: 1,
    title: "Jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Jacket",
    price: 300,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 3,
    title: "Jacket",
    price: 200,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 4,
    title: "Jacket",
    price: 240,
    image: require("../assets/jacket.jpg"),
  },
];
const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        scrollEnabled={true}
        data={listItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
    screen:{
        paddingHorizontal:10
    }
});
