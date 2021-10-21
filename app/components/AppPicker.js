import React from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
const AppPicker = ({
  items,
  icon,
  placeholder,
  selectedItem,
  onSelectItem,
}) => {
  const [visibleModal, setVisibleModel] = React.useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisibleModel(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color={colors.dark}
              size={25}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.title : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.dark}
            size={25}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visibleModal}>
        <Screen>
          <Button onPress={() => setVisibleModel(false)} title="Close Modal" />
          <FlatList
            data={items}
            keyExtractor={(items) => items.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.title}
                onPress={() => {
                  setVisibleModel(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: colors.light,
    marginVertical: 10,
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
