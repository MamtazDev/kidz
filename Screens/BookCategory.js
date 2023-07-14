import { Pressable, StyleSheet, } from 'react-native'
import React from 'react'
import AppScreen from '../Utils/AppScreen'
import RouteHeader from '../Utils/RouteHeader'
import { Center, VStack, Text, View, HStack } from 'native-base';
import Header from '../Utils/Header';
import SingleCard from '../Utils/SingleCard';
import CategoryCard from '../Component/CategoryCard';
import { useNavigation } from '@react-navigation/native';

const BookCategory = () => {
  const navigation = useNavigation();
  return (
    <AppScreen>
      <RouteHeader title="Book Collections" />
      <Text bold fontSize="xl" mt={10} >Find the Best affordable School
        For your Kids</Text>

      <Header title="Select Category " />
      <VStack space={1} mt={10}>

        {/* <CategoryCard navigation={navigation} routename = "book_collection" />
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/> */}

        {
          [
            {
              "image": "https://www.w3schools.com/css/img_lights.jpg",
              "title": "Toddlers Choice",
              "url": "book_collection"
            },
            {
              "image": "https://www.w3schools.com/css/img_lights.jpg",
              "title": "Preschoolers",
              "url": "book_category"
            },
            {
              "image": "https://www.w3schools.com/css/img_lights.jpg",
              "title": "Kindargarteners",
              "url": "Fun_Play_Activity"
            },
            {
              "image": "https://www.w3schools.com/css/img_lights.jpg",
              "title": "Grade 1-2",
              "url": "Fun_Play_Activity"
            },
            {
              "image": "https://www.w3schools.com/css/img_lights.jpg",
              "title": "Grade 3-4",
              "url": "Fun_Play_Activity"
            },


          ].map((item, index) => <CategoryCard routename={item} image ={item.image} navigation={navigation} />)
        }


      </VStack>


    </AppScreen>
  )
}

export default BookCategory

const styles = StyleSheet.create({
  textCard: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    width: '100%'
  }
})