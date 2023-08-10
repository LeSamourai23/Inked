import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../Screens/Account';
import Compose from '../Screens/Compose';
import Notifications from '../Screens/Notifications';
import Search from '../Screens/Search';
import Newsfeed from '../Screens/Newsfeed';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions } from 'react-native';

const Stack = createNativeStackNavigator();

const { width, height } = Dimensions.get('window');

function BottomTabNav() {

    return (
        <Stack.Navigator initialRouteName="Newsfeed" screenOptions={{ animation: 'none' }}>
            <Stack.Screen name="Newsfeed" component={Newsfeed} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Stack.Screen name="Compose" component={Compose} options={{ headerShown: false }} />
            <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
            <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default BottomTabNav;