import { StyleSheet,  View } from 'react-native'
import React from 'react'

import { Text } from "native-base";

const Header = ({title}) => {
  return (
    <View>
      <Text textAlign="center" bold fontSize="xl" mt={6} style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    title:{
        backgroundColor:"#FF005C",
        padding: 10,
        borderWidth:0,
        color:'white',
        borderRadius: 10

    }

})