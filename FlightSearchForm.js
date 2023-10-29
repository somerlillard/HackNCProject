import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';

export default function FlightSearchForm({ onSearch }) {
  const [searchParams, setSearchParams] = useState({
    lapinfant: '',
    child: '',
    city2: '',
    date1: '',
    flightType: '',
    adults: '',
    cabin: '',
    city1: '',
    seniors: '',
    date2: '',
    youth: '',
    infant: '',

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
        placeholder="City To"
        value={searchParams.city2}
        onChangeText={(text) => handleInputChange('city2', text)}
      />
      <TextInput
        placeholder="City From"
        value={searchParams.city1}
        onChangeText={(text) => handleInputChange('city1', text)}
      />
      <TextInput
        placeholder="Lap Infant"
        value={searchParams.lapinfant}
        onChangeText={(text) => handleInputChange('lapinfant', text)}
      />
      <TextInput
        placeholder="Infant"
        value={searchParams.infant}
        onChangeText={(text) => handleInputChange('infant', text)}
      />
      <TextInput
        placeholder="Child"
        value={searchParams.child}
        onChangeText={(text) => handleInputChange('child', text)}
      />
      <TextInput
        placeholder="Youth"
        value={searchParams.youth}
        onChangeText={(text) => handleInputChange('youth', text)}
      />
      <TextInput
        placeholder="Adults"
        value={searchParams.adults}
        onChangeText={(text) => handleInputChange('adults', text)}
      />
      <TextInput
        placeholder="Seniors"
        value={searchParams.seniors}
        onChangeText={(text) => handleInputChange('seniors', text)}
      />
      <TextInput
        placeholder="Flight Type"
        value={searchParams.flightType}
        onChangeText={(text) => handleInputChange('flightType', text)}
      />
      <TextInput
        placeholder="Cabin"
        value={searchParams.cabin}
        onChangeText={(text) => handleInputChange('cabin', text)}
      />
      <TextInput
        placeholder="Start Date"
        value={searchParams.date1}
        onChangeText={(text) => handleInputChange('date1', text)}
      />
      <TextInput
        placeholder="End Date"
        value={searchParams.date2}
        onChangeText={(text) => handleInputChange('date2', text)}
      />
      <Pressable onPress={handleSearch}>
        <Text style={styles.text}>Search Flights</Text>
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
