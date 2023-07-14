import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
import React from 'react'
import AppScreen from '../Utils/AppScreen'
import RouteHeader from '../Utils/RouteHeader'
import { Text, View } from 'native-base';
import Header from '../Utils/Header';


const BookPDF = () => {

  return (
    <AppScreen>
      <RouteHeader title="Book Collections" />
      <Text bold fontSize="xl" mt={10} >Find Coloring & Activity Books
        For your kids Homeschooling</Text>

      <Header title="Coloring Books" />

      <View style={styles.container}>

        <WebView
          style={styles.container}
          originWhitelist={['*']}
          source={{ html: '<h1><center>Hello world</center></h1>' }}
        />

        <Text bold fontSize="xl" mt={10} >Find Coloring & Activity Books
          For your kids Homeschooling</Text>
      </View>
    </AppScreen>
  )
}

export default BookPDF


const styles = StyleSheet.create({
  textCard: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    width: '100%'
  },
  pdf: {
    flex: 1,
    // width:Dimensions.get('window').width,
    // height:Dimensions.get('window').height,
  }
})