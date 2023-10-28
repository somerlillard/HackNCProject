import React from 'react';
import { Text, View, Pressable } from "react-native"

export default function Page({ navigation }) {
    return (
        <View>
            <Pressable onPress = {() => {navigation.goBack()}}>
                <Text>
                    Go back to previous page.
                </Text>
            </Pressable>
        </View>
    )
}