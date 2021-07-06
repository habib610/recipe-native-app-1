import React from 'react';
import { StyleSheet, View, Text, Button,FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/16.2 dummy-data';

const CategoriesMealsScreen = ({navigation, route}) => {
	const itemId = route.params.itemData.item.id
	const mealData = MEALS.filter(meal => meal.categoryIds.indexOf(itemId) >= 0);
	const renderMeal = (itemData) => {
		return (
			<MealItem onSelect={()=> navigation.navigate('Details', {itemData: itemData.item})} itemData={itemData.item} />
		)
	}
	return (
		<View style={{backgroundColor: "white", flex: 1}}>
		<FlatList 
		data={mealData}
		keyExtractor={(item, index)=> item.id}
		renderItem={renderMeal}
		/>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		justifyContent: "center",
		alignItems: "center"
	}
})

export default CategoriesMealsScreen 
