import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ItemBox = (props) => {
    const leftSwipe = () => {
        return (
            <View style={styles.deleteBox}>
                <Text>Delete</Text>
            </View>
        );
    };
    return (
        <Swipeable renderLeftActions={leftSwipe}>
            <View style={styles.container}>
                <Text>My food is {props.data.name}.</Text>
            </View>
        </Swipeable>
    );
};

export default ItemBox;

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 16,
    },
    deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 80,
    },
});