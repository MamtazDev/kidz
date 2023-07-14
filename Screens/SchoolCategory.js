import { StyleSheet, } from 'react-native'
import React from 'react'
import AppScreen from '../Utils/AppScreen'
import RouteHeader from '../Utils/RouteHeader'
import { Center, VStack, Text, View } from 'native-base';
import Header from '../Utils/Header';


const SchoolCategory = () => {
  return (
    <AppScreen>
      <RouteHeader title="School Information" />
      <Text bold fontSize="xl" mt={10} >Find the Best affordable School
        For your Kids</Text>

      <Header title="Select Category" />
      <VStack space={4} mt={10} alignItems="center">
        <Text style={styles.textCard} textAlign="center" bold fontSize="md">School Information</Text>
        <Text style={styles.textCard} textAlign="center" bold fontSize="md">School Information</Text>
        <Text style={styles.textCard} textAlign="center" bold fontSize="md">School Information</Text>
      </VStack>
      <Header title="Select Division" />

      <VStack space={4} mt={10} alignItems="center">
        <Text style={styles.textCard} textAlign="center" bold fontSize="md">School Information</Text>
        <Text style={styles.textCard} textAlign="center" bold fontSize="md">School Information</Text>
        <Text style={styles.textCard} textAlign="center" bold fontSize="md">School Information</Text>
      </VStack>

    </AppScreen>
  )
}

export default SchoolCategory

const styles = StyleSheet.create({
  textCard: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    width: '100%'
  }

})