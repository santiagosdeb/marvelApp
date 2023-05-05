import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native';
import { useTheme } from 'react-native-paper';
import * as Font from 'expo-font'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {APICHARAC } from '@env'
import axios from 'axios'

const Home = () => {

    return (
         <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>WELCOME TO</Text>
            <Image source={require('../../assets/marvel-personajes-removebg-preview.png')} style={{width: '95%', height: 200,}}/>
            <Text style={[styles.title,styles.app]}>APP</Text>
            <Text style={styles.comments}>Where you can look for your favorites marvel characters,</Text>
            <Text style={styles.comments}>comics and series</Text>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#a50000',
        fontFamily: 'heroesassembleital2'
    },
    app: {
        marginTop: 10
    },
    comments:{
        fontSize: 12,
        color: '#a50000',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'heroesassembleital2'
    },
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
        height: '100%',
    },
    buttonBackground: {
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
      },
      button: {
        backgroundColor: 'red',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'white',
      },
      buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
      }
})

export default Home