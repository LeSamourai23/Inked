import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from './Components/BottomTab'
import Login from './Screens/Login'
import BottomTabNav from './Navigation/BottomTabNav'
import ResetPass from './Screens/ResetPass'
import { NavigationContainer } from '@react-navigation/native'
import Newsfeed from './Screens/Newsfeed'

const Stack = createNativeStackNavigator()

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"App"}>
                <Stack.Screen name='App' component={BottomTabNav} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Reset Password' component={ResetPass} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#dcdcdc'
    }
})