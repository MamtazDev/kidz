import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image } from "native-base";
import Landing from "./Landing";
import Sqlbase from "./Sqlbase";
import BookCategory from "./BookCategory";
import PdfReader from "./PdfReader";
import SchoolCategory from "./SchoolCategory";
import BookCollection from "./BookCollection";
import BookPDF from "./BookPDF";

const Tab = createBottomTabNavigator();

function StarterRoute() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#702ABA',
          borderRadius: 15,
          height: 70,
        },
      }}

    >
      <Tab.Screen
        name="Home"
        component={Landing}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <Image
                source={require("../assets/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  fontWeight:'blod',
                  // tintColor: focused ? "#ffffff" : "#ffffff",
                }}
                alt="image"
              />
              <Text
                style={{ color: focused ? "#2E20CA" : "#748c94", fontSize: 8 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Calculator"
        component={Landing}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <Image
                source={require("../assets/icons/calculator.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2E20CA" : "#748c94",
                }}
                alt="image"
              />
              <Text
                style={{ color: focused ? "#2E20CA" : "#748c94", fontSize: 8 }}
              >
                Calculator
              </Text>
            </View>
          ),
        }}
      />


      <Tab.Screen
        name="Database"
        component={Landing}
        // component={Sqlbase}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <Image
                source={require("../assets/icons/analytics.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2E20CA" : "#748c94",
                }}
                alt="image"
              />
              <Text
                style={{ color: focused ? "#2E20CA" : "#748c94", fontSize: 8 }}
              >
                Database
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Landing}
        // component={PdfReader}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
     
              }}
            >
              <Image
                source={require("../assets/icons/profile.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2E20CA" : "#748c94",
                }}
                alt="image"
              />
              <Text
                style={{ color: focused ? "#2E20CA" : "#748c94", fontSize: 8 }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Convert_Currency"
        component={StarterRoute}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#4E43FF" },
        }}
      />
      <Stack.Screen
        name="book_category"
        component={BookCategory}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#4E43FF" },
        }}
      />
      <Stack.Screen
        name="book_collection"
        component={BookCollection}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#4E43FF" },
        }}
      />
      <Stack.Screen
        name="BookPDF"
        component={BookPDF}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#4E43FF" },
        }}
      />



      <Stack.Screen
        name="school_category"
        component={SchoolCategory}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#4E43FF" },
        }}
      />

    </Stack.Navigator>
  );
}
