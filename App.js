import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import Home from "./src/Components/Home";
import CardsCharacters from "./src/Components/CardsCharacters";
import CardsComics from "./src/Components/CardsComics";
import CardsSeries from "./src/Components/CardsSeries";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import CardsAvengers from "./src/Components/CardsAvengers";
import { useEffect, useState } from "react";
import Detail from "./src/Components/Detail";
import TabNavigator from "./src/Components/TabNavigator";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { MaterialCommunityIcons } from '@expo/vector-icons';

function AvengersIcon(props) {
  return (
    <Image
      source={{
        uri: "https://www.pngmart.com/files/3/Avengers-PNG-Transparent-Image.png",
      }}
      style={{ width: 24, height: 24, tintColor: props.color }}
    />
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      heroesassembleital2: require("./assets/heroesassembleital2.ttf"),
      robotolight: require("./assets/Roboto-Light.ttf"),
      robotoregular: require("./assets/Roboto-Regular.ttf"),
    });
    setFontsLoaded(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigator"
      >
        <Stack.Screen name="TabNavigator" options={{headerShown: false}}>
          {(props) => <TabNavigator {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Detail" options={{
          tabBarActiveTintColor: "#a50000",
          headerStyle: {
            backgroundColor: "#a50000",
          },
          headerTitleStyle: {
            fontFamily: 'heroesassembleital2',
            fontSize: 40,
            color: "#fff",
          },
          headerTitleAlign: 'center',
        }}>
          {(props) => <Detail {...props} />}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
