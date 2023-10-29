import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

export default function HotelSearchForm({ onSearch }) {
  const [searchParams, setSearchParams] = useState({
    cityName: '',
    countryName: '',
  });

  const handleInputChange = (param, value) => {
    setSearchParams({ ...searchParams, [param]: value });
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
    <View>
      <TextInput
        placeholder="City Name"
        value={searchParams.cityName}
        onChangeText={(text) => handleInputChange('cityName', text)}
      />
      <TextInput
        placeholder="Country Name"
        value={searchParams.countryName}
        onChangeText={(text) => handleInputChange('countryName', text)}
      />
       <Pressable onPress={handleSearch}>
        <Text style={styles.text}>Search</Text>
      </Pressable>
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