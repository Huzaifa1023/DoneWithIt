import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,

}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1}>{title}</AppText>
            {subTitle && (
              <AppText color="medium" size={15} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
    // backgroundColor:colors.whitek
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flex:1,
    marginLeft: 10,
    justifyContent: "center",
  },
});
