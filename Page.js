import React from 'react';
import { Text, View, Pressable } from "react-native"

export default function Page({ navigation }) {
    return (
        <View>
            <Pressable onPress = {() => {navigation.goBack()}}>
                <Text>
                    Go to this page again
                </Text>
            </Pressable>
            <Pressable onPress = {() => {navigation.goBack()}}>
                <Text>
                    Go Back to previous page.
                </Text>
            </Pressable>
        </View>
    )
}