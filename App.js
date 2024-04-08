import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Menu from "./Screens/Menu";
import Info from "./Screens/Info";
import AjoutVéhicule from "./Screens/AjoutVéhicule";
import Consigne from "./Screens/Consigne";
import ModeSaisie from "./Screens/ModeSaisie";
import ChoixVehicule from "./Screens/ChoixVehicule";
import Témoin from "./Screens/Témoin";
import AjoutTémoin from "./Screens/AjoutTémoin";
import InfoAssuranceA from "./Screens/InfoAssuranceA";
import InfoAssuranceB from "./Screens/InfoAssuranceB";
import InfoAssurance from "./Screens/InfoAssurance";
import ContratA from "./Screens/ContratA";
import ContratB from "./Screens/ContratB";
import Contrat from "./Screens/Contrat";
import ChoqA from "./Screens/ChoqA";
import ChoqArecap from "./Screens/ChoqArecap";
import ChoqB from "./Screens/ChoqB";
import ChoqBrecap from "./Screens/ChoqBrecap";
import Circonstance from "./Screens/Circonstance";
import Accident from "./Screens/Accident";
import ChoixCroquis from "./Screens/ChoixCroquis";
import PhotoCroquis from "./Screens/PhotoCroquis";
import InfoSupp from "./Screens/InfoSupp";
import ObservationA from "./Screens/ObservationA";
import ObservationB from "./Screens/ObservationB";
import SignatureA from "./Screens/SignatureA";
import SignatureB from "./Screens/SignatureB";
import Test from "./Screens/Test";
//#151B26

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AjoutVéhicule"
          component={AjoutVéhicule}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Consigne"
          component={Consigne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ModeSaisie"
          component={ModeSaisie}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChoixVehicule"
          component={ChoixVehicule}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Témoin"
          component={Témoin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AjoutTémoin"
          component={AjoutTémoin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoAssuranceA"
          component={InfoAssuranceA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoAssuranceB"
          component={InfoAssuranceB}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoAssurance"
          component={InfoAssurance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContratA"
          component={ContratA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContratB"
          component={ContratB}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contrat"
          component={Contrat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChoqA"
          component={ChoqA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChoqArecap"
          component={ChoqArecap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChoqB"
          component={ChoqB}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChoqBrecap"
          component={ChoqBrecap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Circonstance"
          component={Circonstance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Accident"
          component={Accident}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChoixCroquis"
          component={ChoixCroquis}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhotoCroquis"
          component={PhotoCroquis}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoSupp"
          component={InfoSupp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ObservationA"
          component={ObservationA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ObservationB"
          component={ObservationB}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignatureA"
          component={SignatureA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignatureB"
          component={SignatureB}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
