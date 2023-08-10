import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

const ScreenHeight = Dimensions.get('window').height;

const BottomTab = ({Newsfeed, Search, Compose, Notifications, Account}) => {

    const componentHeight = ScreenHeight * 0.1;

    return (
        <View style=
            {{
                flex: 1,
                position: 'absolute',
                backgroundColor: 'white',
                height: componentHeight,
                bottom: 0, left: 0, right: 0,
                borderTopLeftRadius: 20, borderTopRightRadius: 20,
                shadowColor: "#000", shadowRadius: 10, shadowOpacity: 0.2, shadowOffset: { width: 0, height: -2 },
            }}>
            <View style={{ marginTop: -15, marginBottom: -20 }}>
                <Icon name="remove-sharp" type="ionicon" color="gray" size={40} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
                <TouchableOpacity onPress={Newsfeed}>
                    <Icon name="albums-outline" type="ionicon" color="black" size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={Search}>
                    <Icon name="search-outline" type="ionicon" color="black" size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:-15}} onPress={Compose}>
                    <Icon name="pencil-outline" type="ionicon" color="black" size={20} reverse />
                </TouchableOpacity>
                <TouchableOpacity onPress={Notifications}>
                    <Icon name="notifications-outline" type="ionicon" color="black" size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={Account}>
                    <Icon name="person-outline" type="ionicon" color="black" size={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({})