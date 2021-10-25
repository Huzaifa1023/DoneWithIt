import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeprator from "../components/ListItemSeprator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Jacket",
    subTitle: "$20",
  },
  {
    id: 2,
    image: require("../assets/jacket.jpg"),
    title: "Jacket",
    subTitle: "$20",
  },
];
export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }
  return (
    <Screen>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={messages}
        renderItem={({ item }) => (
          <ListItem
            renderRightActions={() => (
              <ListItemDeleteAction onPress={()=> handleDelete(item) }/>
            )}
            onPress={() => {
              console.log(item);
            }}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
        ItemSeparatorComponent={ListItemSeprator}
        refreshing={refreshing}
        onRefresh={()=>{
            setMessages(
                [{
                    id: new Date(),
                    image: require("../assets/jacket.jpg"),
                    title: "New Jacket",
                    subTitle: "$50",
                  },...messages]
            )
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
