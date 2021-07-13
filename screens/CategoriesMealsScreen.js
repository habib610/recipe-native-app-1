import React from 'react';
import { StyleSheet, View, Text, Button,FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { useSelector } from 'react-redux'
import Colors from "../constant/Colors";

const CategoriesMealsScreen = ({navigation, route}) => {
	const itemId = route.params.itemData.item.id

	const { filteredMeals } = useSelector((item) => item.meals);
	const mealData = filteredMeals.filter(
		(meal) => meal.categoryIds.indexOf(itemId) >= 0
	);
	const renderMeal = (itemData) => {
		return (
			<MealItem onSelect={()=> navigation.navigate('Details', {itemData: itemData.item})} itemData={itemData.item} />
		)
	}

	if (mealData.length === 0) {
		return (
			<View style={styles.screen}>
				<Text style={styles.title}>Sorry! No Meals Found</Text>
			</View>
		);
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
		alignItems: "center",
		flex: 1,
		backgroundColor: Colors.white,
	},
	title: {
		fontSize: 22,
		textAlign: "center",
		fontFamily: "open-sans-bold",
		color: Colors.red2,
	},
});

export default CategoriesMealsScreen 
