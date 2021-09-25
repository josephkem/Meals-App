import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
font-family: ${(props) => props.theme.fonts.body}
font-size: ${(props) => props.theme.fontSizes.caption}
`;

function RestaurantinfoCard() {
  return (
    <RestaurantCard elevation={5} style={styles.card}>
      <Info>
        <Title>Name</Title>
        <Address>300 Elm Street</Address>
      </Info>
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
