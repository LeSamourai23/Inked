import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import BottomTab from '../Components/BottomTab'
import BottomTabNav from '../Navigation/BottomTabNav'
import { Tab, TabView } from '@rneui/themed';
import { COLORS } from '../Constants/Constants'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const ScreenHeight = Dimensions.get('window').height;

SplashScreen.preventAutoHideAsync();

const Search = ({navigation}) => {

    const [fontsLoaded] = useFonts({
        'Gelion-Reg': require('../assets/Fonts/Gelion-Regular.ttf'),
        'Gelion-Black': require('../assets/Fonts/Gelion-Black.ttf'),
        'Gelion-Bold': require('../assets/Fonts/Gelion-Bold.ttf'),
        'Gelion-SemiBold': require('../assets/Fonts/Gelion-SemiBold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.mainContainer} onLayout={onLayoutRootView}>
            <StatusBar translucent barStyle='dark-content' />

            <BottomTab
                Newsfeed={() => navigation.navigate("Newsfeed")}
                Search={() => navigation.navigate("Search")}
                Compose={() => navigation.navigate("Compose")}
                Notifications={() => navigation.navigate("Notifications")}
                Account={() => navigation.navigate("Account")}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY_BG
    },
})