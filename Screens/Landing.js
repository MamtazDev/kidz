import * as React from "react";
import RouteHeader from "../Utils/RouteHeader";
import AppScreen from "../Utils/AppScreen";
import {ImageBackground, Pressable, StyleSheet} from 'react-native';
import { Text, Box, HStack, Center, View, ScrollView, Image  } from "native-base";
import { Thumbnail } from 'react-native-thumbnail-video';
import Header from "../Utils/Header";
import CategoryCard from "../Component/CategoryCard";

export default function Landing({ navigation }) {
  const image = require("../assets/logo/cat(2).png");
  return (
    <>
    <AppScreen>
      <RouteHeader title="WELCOME"/>
      <Text bold fontSize="xl" mt={6} textAlign='center'>With our parenting plan you will be chilling</Text>

     <Box maxW="80" mt={10} rounded="xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1"  >
      <Thumbnail url="https://www.youtube.com/watch?v=vheeQM4DyzM" />
     </Box>

      <Header title="Choose Category" />

      <ScrollView>
      
      {
        [
          {
            "image": "../assets/category/school2.png",
            "title":"School Information",
            "url": "school_category"
          },
          {
            "image": "../assets/category/school2.png",
            "title":"Book Collections",
            "url": "book_category"
          },
          {
            "image": "../assets/category/school2.png",
            "title":"Fun Play Activity",
            "url": "Fun_Play_Activity"
          },
      
      
      ].map((item, index) => <CategoryCard routename={item} navigation={navigation}/>)
    //   ].map((item, index) => <Pressable onPress={() => navigation.navigate(item.url)}>
    //   <HStack style={styles.card} space={3} my={2} justifyContent='space-evenly' alignItems="center">
    //     {/* <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3} /> */}
    //     <Image size={60} borderRadius={100} source={ require("../assets/category/school2.png") } alt="Alternate Text" />
    //     <Text textAlign="center" bold fontSize="md">{item.title}</Text>
    //     <Image size={10} borderRadius={1}  source={ require("../assets/category/arrow.png") } alt="Alternate Text" />
    //   </HStack>
    // </Pressable>)
      }

      </ScrollView>






    </AppScreen>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'fill',
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:100,
   color: '#1E1E1E',
  },
  catGrid:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:"100%"
  }
});