import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function Home({navigation}) {

  const imgPath = require('./assets/favicon.png')

  return (
    <View style = {styles.container}>
      <Text>TravelBuddy</Text>
      <StatusBar styl = "auto" />
      <Image source = {imgPath}/>
      <Pressable onPress = {() => navigation.navigate('Flights')}>
        <Text>Flights</Text>
      </Pressable>
      <Pressable onPress = {() => navigation.navigate('Hotels')}>
        <Text>Hotels</Text>
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
