import React from 'react';
import * as firebase from 'firebase';

import { StyleSheet, Text, View, TextInput, Button, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

export default function App() {
  let app = firebase.initializeApp({
    
  })
  let firstName :string = "";
  let lastName :string = "";
  return (
    <View style={styles.container}>
      <Text>First Name</Text>
      <TextInput onChangeText={(text: string) => firstName = text }></TextInput>
      <Text>Last Name</Text>
      <TextInput onChangeText={(text: string) => lastName = text }></TextInput>
      <Button title="Submit" onPress={(ev: NativeSyntheticEvent<NativeTouchEvent>) => {
        console.log(`First name: ${firstName}`);
        console.log(`Last name: ${lastName}`);
      }}/>
    </View>
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
