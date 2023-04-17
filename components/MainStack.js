import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home2 from './Home2';
import BookCabScreen from './BookCabScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home2} />
      <Stack.Screen name="BookCabScreen" component={BookCabScreen} />
      {/* Add more screens here */}
    </Stack.Navigator>
  );
};

export default MainStack;
