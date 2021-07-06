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
import { Ionicons } from '@expo/vector-icons';
import FiltersScreen from '../screens/FiltersScreen';


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
					<Item title="search" iconName="ios-star" onPress={() =>  console.log("added")} />
				</HeaderButtons>
			})}
			/>
		  <Stack.Screen 
		  	name="Favorite" 
			component={FavoriteScreen}
			options={({ route }) => ({
				headerStyle: {
					backgroundColor: Platform.OS === "android" ? Colors.purple : "white"
				},
				headerTintColor: Platform.OS === "ios" ? Colors.purple : "white",
				title: "Favorite",
				headerRight: ()=> <HeaderButtons HeaderButtonComponent={CustomHeader}>
					<Item title="search" iconName="heart" onPress={() => alert('search')} />
				</HeaderButtons>
			})}
			/>
		</Stack.Navigator>
	)
}
const FavoriteNavigation = () => {
	return (
		<Stack.Navigator  initialRouteName="Categories">
		  <Stack.Screen 
		  	name="Favorite" 
			component={FavoriteScreen}
			options={({ route }) => ({
				headerStyle: {
					backgroundColor: Platform.OS === "android" ? Colors.purple : "white"
				},
				headerTintColor: Platform.OS === "ios" ? Colors.purple : "white",
				title: "Favorite",
				headerRight: ()=> <HeaderButtons HeaderButtonComponent={CustomHeader}>
					<Item title="search" iconName="ios-star" onPress={() => alert('search')} />
				</HeaderButtons>
			})}
			/>
		</Stack.Navigator>
	)
}
const FilterNavigation = () => {
	return (
		<Stack.Navigator  initialRouteName="Categories">
		  <Stack.Screen 
		  	name="Favorite" 
			component={FiltersScreen}
			options={({ route }) => ({
				headerStyle: {
					backgroundColor: Platform.OS === "android" ? Colors.purple : "white"
				},
				headerTintColor: Platform.OS === "ios" ? Colors.purple : "white",
				title: "Filter Favorite",
			})}
			/>
		</Stack.Navigator>
	)
}

const BottomTabNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
			tabBarOptions={{
				showLabel: false
			}}
			>
				<Tab.Screen
				options={{
					tabBarIcon: ({focused})=> {
						return (
							<Ionicons name="ios-restaurant" size={25} color={ focused ? Colors.indigo : Colors.purple} />
						)
					}
				}}
				name="Categories" component={Navigation} />
				<Tab.Screen
				options={{
					tabBarIcon: ({focused})=> {
						return (
							<Ionicons name="heart" size={25} color={ focused ? Colors.indigo : Colors.purple} />
						)
					}
				}}
				name="Favorite" component={FavoriteNavigation} />
				<Tab.Screen
				options={{
					tabBarIcon: ({focused})=> {
						return (
							<Ionicons name="filter" size={25} color={ focused ? Colors.indigo : Colors.purple} />
						)
					}
				}}
				name="Filter" component={FilterNavigation} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
export default BottomTabNavigator;