import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import BottomTabNavigator from './navigation/Navigation';

import { combineReducers, createStore } from 'redux'
import mealReducer from './Store/Reducers/MealReducers';
import { Provider } from 'react-redux';



const Stack = createStackNavigator();

const rootReducer = combineReducers({
	meals: mealReducer
})

const store = createStore(rootReducer)

export default function App() {
let [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
	'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
	  <Provider store={store}>
		<BottomTabNavigator />
	  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
	  fontFamily: "open-sans"
  }
});
