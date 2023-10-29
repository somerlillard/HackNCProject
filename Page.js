import React from 'react';
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Page({ navigation }) {
    return (
        <View>
            <Pressable onPress = {() => {navigation.goBack()}}>
                <Text style = {styles.text}>Go back to previous page.</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
    }
});