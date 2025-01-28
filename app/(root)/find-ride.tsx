import { View, Text } from "react-native";
import React from "react";
import { useLocationStore } from "@/store";
import { SafeAreaView } from "react-native-safe-area-context";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();
  return (
    <SafeAreaView>
      <Text>FindRide: {userAddress}</Text>
      <Text>FindRide: {destinationAddress}</Text>
    </SafeAreaView>
  );
};

export default FindRide;
