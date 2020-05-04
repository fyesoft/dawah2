import React from 'react';
import * as firebase from 'firebase';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from "./src/view/home";
import { ProfileScreen } from "./src/view/profile";

import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent 
} from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  let app = firebase.initializeApp({
    
  })
  let firstName :string = "";
  let lastName :string = "";
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Profile" component={ProfileScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
