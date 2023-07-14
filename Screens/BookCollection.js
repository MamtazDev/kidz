import { Pressable, StyleSheet, } from 'react-native'
import React from 'react'
import AppScreen from '../Utils/AppScreen'
import RouteHeader from '../Utils/RouteHeader'
import { Center, VStack, Text, View, HStack } from 'native-base';
import Header from '../Utils/Header';
import SingleCard from '../Utils/SingleCard';
import CategoryCard from '../Component/CategoryCard';
import CardCat from '../Component/CardCat';
import { useNavigation } from '@react-navigation/native'

const BookCollection = () => {
  const navigation = useNavigation();
  return (
    <AppScreen>
      <RouteHeader title="Book Collections" />
      <Text bold fontSize="xl" mt={10} >Find Coloring & Activity Books
        For your kids Homeschooling</Text>

      <Header title="Coloring Books" />
      
     {
      [1,2,3].map((item, index) =>  <CardCat navigation={navigation}/>)
     }
      {/* <CardCat/>
      <CardCat/>
      <CardCat/> */}


    </AppScreen>
  )
}

export default BookCollection

const styles = StyleSheet.create({
  textCard: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    width: '100%'
  }
})