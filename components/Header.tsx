import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {SvgUri} from 'react-native-svg';
import { faChevronLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons'; // Import icons


export default function Header() {
  return (
   <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
            <SvgUri 
                width={24} 
                height={24} 
                uri='faChevronLeft.icon[4]' // Accessing SVG data
                fill="#fff" 
            />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dotsMenu}>
            <SvgUri 
                width={24} 
                height={24} 
                uri='faChevronLeft.icon[4]' // Accessing SVG data
                fill="#fff" 
            />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Header</Text>
        </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#f0f0f0',
        padding: 18,
    },
    headerTitle: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {},
    dotsMenu: {},
})