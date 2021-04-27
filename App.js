import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import store from "./src/redux/store";
import RecipesListScreen from "./src/components/RecipesListScreen";
import RecipeDetailsScreen from "./src/components/RecipeDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="RecipesListScreen" component={RecipesListScreen} />
      <Stack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}

