import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

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

function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurantt",
    icon,
    photos = [],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5} style={styles.card}>
      <Info>
        <Title>{name}</Title>
        <SvgXml xml={star} width={20} height={20} />
        <Address>{address}</Address>
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

export default RestaurantInfoCard;
