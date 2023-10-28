import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useState } from 'react';

export default function Home({navigation}) {

  const imgPath = require('./assets/favicon.png')
  const [count, setCount] = useState(0)

  return (
    <View style = {styles.container}>
      <Text>Hello World!!!!!!</Text>
      <StatusBar styl = "auto" />
      <Image source = {imgPath}/>
      <Pressable onPress = {() => {setCount(count + 1)}}>
        <Text style = {styles.button}>This is a button!</Text>
        <Text>{count}</Text>
      </Pressable>
      <Pressable onPress = {() => navigation.navigate('Second')}>
        <Text>Go To Next Page</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderColor: 'red', 
    borderWidth: 1
  }
});
