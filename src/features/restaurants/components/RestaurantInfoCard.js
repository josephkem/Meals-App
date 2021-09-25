import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

function RestaurantinfoCard() {
  return (
    <Card elevation={5} style={styles.card}>
      <Text>Name</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});

export default RestaurantinfoCard;
