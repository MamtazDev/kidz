import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Center, HStack, Image, Text } from 'native-base'
import { Pressable } from 'react-native'

const CategoryCard = ({ navigation, routename, image }) => {
  let urll = "../assets/category/school2.png"
  let arrow = "../assets/category/arrow.png"

  // console.log("routename", routename.image)


  return (
    <Pressable onPress={() => navigation.navigate(routename.url)}>
      <HStack style={styles.card} space={3} my={2} justifyContent='space-evenly' alignItems="center">
        {/* <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3} /> */}
        <Image size={60} borderRadius={100} source={ require(urll) } alt="Alternate Text" />
        <Text textAlign="center" bold fontSize="md">{routename.title}</Text>
        <Image size={10} borderRadius={1}  source={ require(arrow) } alt="Alternate Text" />
      </HStack>
    </Pressable>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 10
  }
})