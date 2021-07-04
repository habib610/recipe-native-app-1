import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
const MealDetailsScreen = ({navigation}) => {
	
	return (
		<View style={styles.screen}>
			<Text>Meal Details Screen</Text>
			<Button title="click to go meal screen" onPress={()=>navigation.goBack()} />
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		justifyContent: "center",
		alignItems: "center"
	}
})

export default MealDetailsScreen;
