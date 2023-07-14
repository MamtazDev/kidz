import { StyleSheet } from 'react-native'
import React from 'react'
import { Center, HStack,Text, View, Pressable } from 'native-base'

const SingleCard = ({routename}) => {
  return (
    <>
       <Pressable onPress={() => navigation.navigate(routename)}>
          <HStack style={styles.card} space={3} my={2} justifyContent="space-between" p={2} alignItems="center">
            <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3} />
            <Text textAlign="center" bold fontSize="md">School Information</Text>
            <Center h="10" w="10" bg="primary.700" rounded="md" shadow={3} />
          </HStack>
        </Pressable>
    </>
  )
}

export default SingleCard

const styles = StyleSheet.create({})