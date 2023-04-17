import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Home from "./components/Home";
import Login from "./components/Login";
import MainHome from "./components/MainHome";
import MessageScreen from "./components/MessageScreen";
import YouTubeLinksScreen from "./components/YouTubeLinksScreen";
import BookCabScreen from "./components/BookCabScreen";
import Home2 from "./components/Home2";


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainHome" component={MainHome} />
       
        <Stack.Screen name="Home2" component={Home2}  />
        <Stack.Screen name= "MessageScreen" component={MessageScreen}  />
        <Stack.Screen name= "YouTubeLinksScreen" component={YouTubeLinksScreen} />
        <Stack.Screen name="BookCabScreen" component={BookCabScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
