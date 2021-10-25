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
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
const AppPicker = ({
  items,
  icon,
  placeholder,
  selectedItem,
  PickerItemComponent = PickerItem,
  numberOfColumns=1,
  onSelectItem,
  width
}) => {
  const [visibleModal, setVisibleModel] = React.useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisibleModel(true)}>
        <View style={[styles.container,{width:width}]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color={colors.dark}
              size={25}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.medium}
            size={25}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visibleModal}>
        <Screen>
          <Button onPress={() => setVisibleModel(false)} title="Close" />
          <FlatList
            data={items}
            keyExtractor={(items) => items.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  onSelectItem(item);
                  setVisibleModel(false);
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
    color:colors.medium
  },
});
 