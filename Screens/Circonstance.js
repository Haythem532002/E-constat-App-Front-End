import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Switch } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
const Photo = ({ letter }) => {
  const backColor = (letter) => {
    if (letter === "A") {
      return { backgroundColor: "red" };
    } else {
      return { backgroundColor: "#D9D9D9" };
    }
  };
  return (
    <View
      style={[
        {
          width: 60,
          height: 60,
          padding: 10,
          borderRadius: 30,
        },
        backColor(letter),
      ]}
    >
      <Image
        source={require("../assets/WhiteCar.png")}
        style={{ width: 40, height: 40 }}
        resizeMode="contain"
      />
    </View>
  );
};

const Box = ({ text, checkedA, checkedB, onToggleA, onToggleB }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 8,
      }}
    >
      <Switch
        trackColor={{ false: "#767577", true: "#ffffff" }}
        thumbColor={checkedA ? "red" : "#f4f3f4"}
        onValueChange={onToggleA}
        value={checkedA}
      />
      <Text
        style={{
          color: "#ffffff",
          fontSize: 20,
          width: 250,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#ffffff" }}
        thumbColor={checkedB ? "red" : "#f4f3f4"}
        onValueChange={onToggleB}
        value={checkedB}
      />
    </View>
  );
};

const Vehicules = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Photo letter="A" />
        <Text style={styles.titre}>Vehicule A</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.titre}>Vehicule B</Text>
        <Photo letter="B" />
      </View>
    </View>
  );
};

const Circonstance = () => {
  const navigation = useNavigation();
  const [boxStatesA, setBoxStatesA] = useState({
    stationnement: false,
    quittaitStationnement: false,
    prenaitStationnement: false,
    sortaitParking: false,
    sengageaitParking: false,
    arretCirculation: false,
    frottement: false,
    heurtaitArriere: false,
    roulaitMemeSens: false,
    changeaitFile: false,
    doublait: false,
    viraitDroite: false,
    viraitGauche: false,
    reculait: false,
    empletait: false,
    venaitDroite: false,
    navaitPasObserved: false,
    aucun: false,
  });

  const [boxStatesB, setBoxStatesB] = useState({
    stationnement: false,
    quittaitStationnement: false,
    prenaitStationnement: false,
    sortaitParking: false,
    sengageaitParking: false,
    arretCirculation: false,
    frottement: false,
    heurtaitArriere: false,
    roulaitMemeSens: false,
    changeaitFile: false,
    doublait: false,
    viraitDroite: false,
    viraitGauche: false,
    reculait: false,
    empletait: false,
    venaitDroite: false,
    navaitPasObserved: false,
    aucun: false,
  });

  const handleBoxToggleA = (boxName) => {
    setBoxStatesA((prevState) => ({
      ...prevState,
      [boxName]: !prevState[boxName],
    }));
  };

  const handleBoxToggleB = (boxName) => {
    setBoxStatesB((prevState) => ({
      ...prevState,
      [boxName]: !prevState[boxName],
    }));
  };
  return (
    <Screen>
      <DynamicHeader screen="ChoqBrecap" num={3} />
      <Title text="Circonstances" />
      <Vehicules />
      <View style={styles.container}>
        <Box
          text="en stationnement"
          checkedA={boxStatesA.stationnement}
          checkedB={boxStatesB.stationnement}
          onToggleA={() => handleBoxToggleA("stationnement")}
          onToggleB={() => handleBoxToggleB("stationnement")}
        />
        <Box
          text="quittait un stationnement"
          checkedA={boxStatesA.quittaitStationnement}
          checkedB={boxStatesB.quittaitStationnement}
          onToggleA={() => handleBoxToggleA("quittaitStationnement")}
          onToggleB={() => handleBoxToggleB("quittaitStationnement")}
        />
        <Box
          text="prenait un stationnement"
          checkedA={boxStatesA.prenaitStationnement}
          checkedB={boxStatesB.prenaitStationnement}
          onToggleA={() => handleBoxToggleA("prenaitStationnement")}
          onToggleB={() => handleBoxToggleB("prenaitStationnement")}
        />
        <Box
          text="sortait d'un parking,d'un lieu privé,d'un chemin de terre"
          checkedA={boxStatesA.sortaitParking}
          checkedB={boxStatesB.sortaitParking}
          onToggleA={() => handleBoxToggleA("sortaitParking")}
          onToggleB={() => handleBoxToggleB("sortaitParking")}
        />
        <Box
          text="s'engageait dans un parking, un lieu privé,un chemin de terre"
          checkedA={boxStatesA.sengageaitParking}
          checkedB={boxStatesB.sengageaitParking}
          onToggleA={() => handleBoxToggleA("sengageaitParking")}
          onToggleB={() => handleBoxToggleB("sengageaitParking")}
        />
        <Box
          text="arrét de circulation"
          checkedA={boxStatesA.arretCirculation}
          checkedB={boxStatesB.arretCirculation}
          onToggleA={() => handleBoxToggleA("arretCirculation")}
          onToggleB={() => handleBoxToggleB("arretCirculation")}
        />
        <Box
          text="frottement sans changement de file"
          checkedA={boxStatesA.frottement}
          checkedB={boxStatesB.frottement}
          onToggleA={() => handleBoxToggleA("frottement")}
          onToggleB={() => handleBoxToggleB("frottement")}
        />
        <Box
          text="heurtait à l'arriere,en roulant dans le méme sens et sur une méme file"
          checkedA={boxStatesA.heurtaitArriere}
          checkedB={boxStatesB.heurtaitArriere}
          onToggleA={() => handleBoxToggleA("heurtaitArriere")}
          onToggleB={() => handleBoxToggleB("heurtaitArriere")}
        />
        <Box
          text="roulait dans le méme sens et sur une file différente"
          checkedA={boxStatesA.roulaitMemeSens}
          checkedB={boxStatesB.roulaitMemeSens}
          onToggleA={() => handleBoxToggleA("roulaitMemeSens")}
          onToggleB={() => handleBoxToggleB("roulaitMemeSens")}
        />
        <Box
          text="changeait de file"
          checkedA={boxStatesA.changeaitFile}
          checkedB={boxStatesB.changeaitFile}
          onToggleA={() => handleBoxToggleA("changeaitFile")}
          onToggleB={() => handleBoxToggleB("changeaitFile")}
        />
        <Box
          text="doublait"
          checkedA={boxStatesA.doublait}
          checkedB={boxStatesB.doublait}
          onToggleA={() => handleBoxToggleA("doublait")}
          onToggleB={() => handleBoxToggleB("doublait")}
        />
        <Box
          text="virait à droite"
          checkedA={boxStatesA.viraitDroite}
          checkedB={boxStatesB.viraitDroite}
          onToggleA={() => handleBoxToggleA("viraitDroite")}
          onToggleB={() => handleBoxToggleB("viraitDroite")}
        />
        <Box
          text="virait à gauche"
          checkedA={boxStatesA.viraitGauche}
          checkedB={boxStatesB.viraitGauche}
          onToggleA={() => handleBoxToggleA("viraitGauche")}
          onToggleB={() => handleBoxToggleB("viraitGauche")}
        />
        <Box
          text="reculait"
          checkedA={boxStatesA.reculait}
          checkedB={boxStatesB.reculait}
          onToggleA={() => handleBoxToggleA("reculait")}
          onToggleB={() => handleBoxToggleB("reculait")}
        />
        <Box
          text="emplétait sur la partie de chaussée reservée à la circulation en sens inverse"
          checkedA={boxStatesA.empletait}
          checkedB={boxStatesB.empletait}
          onToggleA={() => handleBoxToggleA("empletait")}
          onToggleB={() => handleBoxToggleB("empletait")}
        />
        <Box
          text="venait de droite(dans un carrefour)"
          checkedA={boxStatesA.venaitDroite}
          checkedB={boxStatesB.venaitDroite}
          onToggleA={() => handleBoxToggleA("venaitDroite")}
          onToggleB={() => handleBoxToggleB("venaitDroite")}
        />
        <Box
          text="n'avait pas observé le signal de priorité"
          checkedA={boxStatesA.navaitPasObserved}
          checkedB={boxStatesB.navaitPasObserved}
          onToggleA={() => handleBoxToggleA("navaitPasObserved")}
          onToggleB={() => handleBoxToggleB("navaitPasObserved")}
        />
      </View>
      <View
        style={{
          marginVertical: 20,
          backgroundColor: "gray",
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderRadius: 8,
        }}
      >
        <Vehicules />
        <Box
          text="Ma situation ne correspond à aucune de ces propositions"
          checkedA={boxStatesA.aucun}
          checkedB={boxStatesB.aucun}
          onToggleA={() => handleBoxToggleA("aucun")}
          onToggleB={() => handleBoxToggleB("aucun")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoqBreacp")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("Accident")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ffffff",
    marginVertical: 10,
    borderRadius: 8,
  },
  titre: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: "#ffffff",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
});

export default Circonstance;
