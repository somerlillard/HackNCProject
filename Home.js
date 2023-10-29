import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function Home({navigation}) {

  const imgPath = require('./assets/TravelBuddyLogo.png')

  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>TravelBuddy</Text>
      <StatusBar styl = "auto" />
      <Image source = {imgPath}/>
      <Pressable onPress = {() => navigation.navigate('Flights')}>
        <Text style = {styles.text}>Flights</Text>
      </Pressable>
      <Pressable onPress = {() => navigation.navigate('Hotels')}>
        <Text style = {styles.text}>Hotels</Text>
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
  },
  text: {
    fontSize: 30,
  }
});
