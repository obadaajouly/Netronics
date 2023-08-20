import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Pages from "../screens/Pages";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TrendingScreen from "../screens/TrendingScreen";


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Pages"
          component={Pages}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Trending"
          component={TrendingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
