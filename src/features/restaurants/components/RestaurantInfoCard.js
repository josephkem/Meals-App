import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
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
