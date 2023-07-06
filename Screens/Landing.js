import * as React from "react";
import RouteHeader from "../Utils/RouteHeader";
import AppScreen from "../Utils/AppScreen";
import {ImageBackground, StyleSheet} from 'react-native';
import { Text, Box, HStack, Center, View  } from "native-base";
import { Thumbnail } from 'react-native-thumbnail-video';
import CardCat from "../Component/CardCat";

export default function Landing({ navigation }) {
  const image = require("../assets/logo/cat(2).png");
  return (
    <>
    <AppScreen>
      <RouteHeader title="WELCOME"/>
      <Text bold fontSize="xl" mt={6}>With our parenting plan you will be chilling</Text>

     <Box maxW="80" mt={10} rounded="xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1"  >
      <Thumbnail url="https://www.youtube.com/watch?v=vheeQM4DyzM" />
     </Box>

      <Text bold fontSize="lg" mt={6}>Choose Category</Text>

      {/* Category  */}
  

        
        <CardCat navigation = {navigation} />

      

        
    

      {/* Category  */}




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