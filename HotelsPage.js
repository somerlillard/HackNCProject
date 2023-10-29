import React from 'react';
import { StyleSheet, Text, View, Pressable } from "react-native";
import HotelSearchForm from './HotelSearchForm';

export default function HotelsPage({ navigation }) {
  const handleSearch = async (searchParams) => {
    try {
      const url = `https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=${searchParams.cityName}&countryName=${searchParams.countryName}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'be9a7e44d3msh273c55870c3cf2ep12d0d8jsn1d52881b89e6',
          'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
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
        <HotelSearchForm onSearch={handleSearch} /> 
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    margin: 10,
  }
});
