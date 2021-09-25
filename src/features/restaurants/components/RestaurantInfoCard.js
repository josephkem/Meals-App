import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

function RestaurantinfoCard() {
  return (
    <RestaurantCard elevation={5} style={styles.card}>
      <Title>Name</Title>
    </RestaurantCard>
  );
}

const styles = StyleSheet.create({
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});

export default RestaurantinfoCard;
