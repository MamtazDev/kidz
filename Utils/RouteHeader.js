import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { HStack, Image, View } from "native-base";

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const RouteHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <HStack alignItems={"center"} justifyContent="space-between">
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        
        <View style={styles.wrapper}>
        <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/logo/ArrowLeftCircle.png")}
          style={{
            width: 35,
            height: 35,
            // backgroundColor:'red',
            borderRadius:10
          }}
          alt="logo"
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          // marginLeft: "-50px",
          fontWeight: "bold",
          color: "#000000",
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/logo/ArrowRighttCircle.png")}
          style={{
            width: 35,
            height: 35,
            // backgroundColor:'red',
            borderRadius:10
          }}
          alt="logo"
        />
      </TouchableOpacity>
    </HStack>
  );
};

export default RouteHeader;

const styles = StyleSheet.create({
  wrapper: {
    width: 35,
    height: 35,
    backgroundColor:'red',
    borderRadius:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    
  }
});
