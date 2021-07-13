import React from 'react';
import { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TextInput,
	Button,
	Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import Colors from "../constant/Colors";
import { addFavoriteAction } from "../Store/Actions/MealActions";

const FavoriteScreen = () => {
	const dispatch = useDispatch();
	const { favoriteMeals } = useSelector((item) => item.meals);
	const renderMeal = (itemData) => {
		return (
			<MealItem
				onSelect={() =>
					Alert.alert(
						"Remove From Favorite!",
						"Are you sure?",

						[
							{
								text: "No",
								onPress: () => null,
								style: "cancel",
							},
							{
								text: "Yes",
								onPress: () =>
									dispatch(
										addFavoriteAction(itemData.item.id)
									),
							},
						]
					)
				}
				itemData={itemData.item}
			/>
		);
	};
	const [itemId, setItemId] = useState("");
	
	return (
		<View style={{ backgroundColor: "white", flex: 1 }}>
			{favoriteMeals.length === 0 ? (
				<View style={styles.screen}>
					<Text style={styles.title}>You Have No Favorite Item!</Text>
				</View>
			) : (
				<FlatList
					data={favoriteMeals}
					keyExtractor={(item, index) => item.id}
					renderItem={renderMeal}
				/>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	title: {
		fontSize: 22,
		textAlign: "center",
		fontFamily: "open-sans-bold",
		color: Colors.indigo,
	},
});

export default FavoriteScreen 
