import React from 'react';
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constant/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeader from '../components/CustomHeader';
import FavoriteScreen from '../screens/FavoriteScreen';

const Navigation = () => {
	return (
		<Stack.Navigator  initialRouteName="Categories">
		  <Stack.Screen 
			name="Categories" 
			component={CategoriesScreen}
			options={{
				title:"Meal Categories"
			}}
		  />
		  <Stack.Screen 
		  	name="Meals" 
			component={CategoriesMealsScreen}
			options={({ route }) => ({ 
				title: route.params.name,
				headerStyle: {
					backgroundColor: route.params.bar
				},
				headerTintColor: Colors.white
			})}
			/>
		  <Stack.Screen 
		  	name="Details" 
			component={MealDetailsScreen}
			options={({ route }) => ({
				headerStyle: {
					backgroundColor: Platform.OS === "android" ? Colors.purple : "white"
				},
				headerTintColor: Platform.OS === "ios" ? Colors.purple : "white",
				title: "Details Meals",
				headerRight: ()=> <HeaderButtons HeaderButtonComponent={CustomHeader}>
					<Item title="search" iconName="ios-star" onPress={() => alert('search')} />
				</HeaderButtons>
			})}
			/>
		</Stack.Navigator>
	)
}

const BottomTabNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Categories" component={Navigation} />
				<Tab.Screen name="Favorite" component={FavoriteScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
export default BottomTabNavigator;