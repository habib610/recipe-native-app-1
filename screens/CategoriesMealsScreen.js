import React from 'react';
import { StyleSheet, View, Text, Button,FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/16.2 dummy-data';

const CategoriesMealsScreen = ({navigation, route}) => {
	const itemId = route.params.itemData.item.id
	const mealData = MEALS.filter(meal => meal.categoryIds.indexOf(itemId) >= 0);
	console.log(mealData)
	const renderMeal = (itemData) => {
		return (
			<MealItem itemData={itemData.item} />
		)
	}
	return (
		<FlatList 
		data={mealData}
		keyExtractor={(item, index)=> item.id}
		renderItem={renderMeal}
		/>
	);
};
const styles = StyleSheet.create({
	screen: {
		justifyContent: "center",
		alignItems: "center"
	}
})

export default CategoriesMealsScreen 
