import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import FlightsPage from './FlightsPage';
import HotelsPage from './HotelsPage'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "Flights" component = {FlightsPage}/>
        <Stack.Screen name = "Hotels" component = {HotelsPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
