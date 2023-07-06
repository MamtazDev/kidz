import { StyleSheet, } from 'react-native'
import React from 'react'
import AppScreen from '../Utils/AppScreen'
import RouteHeader from '../Utils/RouteHeader'
import { Center, VStack,Text, View  } from 'native-base';


const BookCategory = () => {
  return (
    <AppScreen>
      <RouteHeader title="BOOKS"/>
      <Text bold fontSize="xl" mt={10} >Here you will find answers on most common topics for any kid age</Text>

      <VStack space={4} mt={10}  alignItems="center">
        <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
        <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
      </VStack>

    </AppScreen>
  )
}

export default BookCategory

const styles = StyleSheet.create({})