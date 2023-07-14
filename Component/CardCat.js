import React from 'react';
import { Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, ImageBackground, Text, SafeAreaView } from 'react-native';

const CardCat = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.grid}>
               

                
                
                    <ImageBackground 
                    //   onPress={() => navigation.navigate("BookPDF")}
                        source={require('../assets/logo/cat(1).png')} // Replace with the actual image path for card 1
                        style={styles.card}
                        imageStyle={styles.backgroundImage}
                    >
                        <Text onPress={() =>  navigation.navigate("BookPDF")} style={styles.cardText}>Book</Text>

                    </ImageBackground>
                  

                <ImageBackground
                    source={require('../assets/logo/cat(2).png')} // Replace with the actual image path for card 2
                    style={styles.card}
                    imageStyle={styles.backgroundImage}
                >
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    card: {
        width: '45%',
        height: 150,
        borderRadius: 10,
        justifyContent: 'flex-end',
        overflow: 'hidden',
        borderWidth:1,

    },
    backgroundImage: {
        // resizeMode: 'contain',
        width: '100%',
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
    },
});

export default CardCat;