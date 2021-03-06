import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import React from "react";
import { StatusBar, SafeAreaView, Text, View } from "react-native";
import RestaurantInfoCard from "../components/RestaurantInfoCard";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

function RestaurantScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}

export default RestaurantScreen;
