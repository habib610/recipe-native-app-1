import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import MealItem from '../components/MealItem';
import Colors from '../constant/Colors';
const MealDetailsScreen = ({navigation, route}) => {

	const item  = route.params.itemData

	return (
		<ScrollView style={{backgroundColor: "white", flex: 1}}>
			<View>
				<MealItem itemData={item} onSelect={()=> console.log("This is your meal")} />
			</View>

			<View style={{marginHorizontal: 10}}>
				<Text style={styles.title}>Ingredients...</Text>
				{
					item.ingredients.map((items, index )=> (
						<Text style={styles.subTitle} key={index}>{items}</Text>
					))
				}
				<Text style={[styles.title, {color:  Colors.red2}]}>Complexity...</Text>
				{
					item.complexity.map((items, index )=> (
						<Text style={[styles.subTitle, styles.subTitle2]} key={index}>{items}</Text>
					))
				}
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	screen: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		flex: 1
	},
	title: {
		fontSize: 22,
		fontFamily: 'open-sans-bold',
		textAlign: "center",
		marginTop: 20,
		marginBottom: 10,
		color: Colors.orange
	},
	subTitle: {
		fontSize: 16,
		marginVertical: 5,
		borderWidth: 1,
		padding: 10,
		borderRadius: 9,
		borderColor: Colors.orange,
		color: Colors.midnight
	},
	subTitle2: {
		borderColor: Colors.red2,
		color:  Colors.midnight
	}
})

export default MealDetailsScreen;
