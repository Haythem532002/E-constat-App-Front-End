import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import Signature from "react-native-signature-canvas";

const SignatureSeul = () => {
  const navigation = useNavigation();
  const [signature, setSign] = useState(null);

  const handleOK = (signature) => {
    setSign(signature);
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;
  return (
    <Screen>
      <DynamicHeader screen="ObservationSeul" num={6} />
      <Title text="Signature" />
      <Text style={{ color: "#ffffff", fontSize: 22, marginBottom: 20 }}>
        Veuillez signer avec le doight :{" "}
      </Text>
      <View style={{ width: 335, height: 350 }}>
        <Signature
          onOK={handleOK}
          onEmpty={handleEmpty}
          descriptionText="Sign"
          clearText="Clear"
          confirmText="Save"
          webStyle={style}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ObservationSeul")}
        />
        <ButtonRouge title="Suivant" />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 160,
  },
  signatureCapture: {
    width: 300,
    height: 200,
    borderColor: "#000",
    borderWidth: 1,
  },
  preview: {
    width: 335,
    height: 300,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    borderWidth: 1,
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10,
  },
});

export default SignatureSeul;
