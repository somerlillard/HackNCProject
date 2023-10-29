import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FlightSearchForm from './FlightSearchForm';

export default function FlightsPage({ navigation }) {
    const handleSearch = async (searchParams) => {
      try {
        const url = `https://compare-flight-prices.p.rapidapi.com/GetPricesAPI/StartFlightSearch.aspx?lapinfant=${searchParams.lapinfant}&child=${searchParams.child}&city2=${searchParams.city2}&date1=${searchParams.date1}&youth=${searchParams.youth}&flightType=${searchParams.flightType}&adults=${searchParams.adults}&cabin=${searchParams.cabin}&infant=${searchParams.infant}&city1=${searchParams.city1}&seniors=${searchParams.seniors}&date2=${searchParams.date2}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'be9a7e44d3msh273c55870c3cf2ep12d0d8jsn1d52881b89e6',
            'X-RapidAPI-Host': 'compare-flight-prices.p.rapidapi.com'
          }
        };
  
        const response = await fetch(url, options);
        if (response.ok) {
          const result = await response.text();
          console.log(result);
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

return (
      <View style={styles.container}>
        <View>
          <Pressable onPress={() => { navigation.goBack() }}>
            <Text style={styles.text}>Go back to previous page.</Text>
          </Pressable>
        </View>
        <FlightSearchForm onSearch={handleSearch} /> 
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  flightList: {
    marginTop: 20,
  },
  flightItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
  },
});
