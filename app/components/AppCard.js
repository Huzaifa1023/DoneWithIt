import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function AppCard({ image, title, subTitle }) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText color={colors.secondary}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 20,
    marginVertical:10,
    backgroundColor:colors.light,
    overflow:"hidden",

  },
  image: {
    height: 200,
    width: "100%",
  },
  textContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
});
