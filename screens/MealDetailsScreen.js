import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
const MealDetailsScreen = ({navigation, route}) => {
	// console.log(route.params.itemData)
	const item  = route.params.itemData
	console.log(item)
	return (
		<View style={styles.screen}>
			<Text>Meal Details Screen {item.title}</Text>
			<Button title="click to go meal screen" onPress={()=>navigation.goBack()} />
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		flex: 1
	}
})

export default MealDetailsScreen;
