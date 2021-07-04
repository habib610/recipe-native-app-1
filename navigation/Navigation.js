import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constant/Colors';
const Stack = createStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer >
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
		  <Stack.Screen name="Details" component={MealDetailsScreen} />
		</Stack.Navigator>
	  </NavigationContainer>
	)
}
export default Navigation;