import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import VehiculeIndication from "../Components/VehiculeIndication";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import DrawingPad from "../Components/DrawingPad";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";


const SignatureA = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <DynamicHeader screen="InfoSupp" num={5} />
      <Title text="Signature" />
      <VehiculeIndication letter="A" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#ffffff", fontSize: 22 }}>
          Veuillez signer avec le doight :{" "}
        </Text>
        <Pressable>
          <Icon name="reload" size={30} color="#ffffff" />
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ObservationA")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("SignatureB")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 210,
  },
  signatureCapture: {
    width: 300,
    height: 200,
    borderColor: "#000",
    borderWidth: 1,
  },
});

export default SignatureA;
