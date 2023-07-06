import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { database } from './base';
import AppScreen from '../Utils/AppScreen';

export default function Sqlbase() {
    useEffect(() => {
        // Create the table when the app starts
        database.createTable();
    }, []);


    const item = {
        name: 'Example Item',
        id: 1,
        datas: [
          { id: 2, rate: 120 },
          { id: 1, rate: 120 },
          { id: 5, rate: 120 },
          { id: 8, rate: 120 },
        ],
        createdAt: new Date(),
      };
    const addItem = () => {
        database.insertItem(item, () => {
            // Item inserted successfully, do something here if needed
        });
    };

    const displayItems = () => {
        database.getItems(items => {
            console.log('Items:', items);
        });
    };

    return (
        <AppScreen>
            <View>
                <Text onPress={addItem}>Add Item</Text>
                <Text onPress={displayItems}>Display Items</Text>
            </View>
        </AppScreen>
    );
}


