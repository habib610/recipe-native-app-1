import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Colors from '../constant/Colors';

const FiltersScreen = () => {
	const [gluten, setGluten] = useState(false);
	const [vegetarian, setVegetarian] = useState(false);
	const [isVegan, setIsVegan] = useState(false);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filter</Text>
			<View style={styles.filterContainer}>
				<Text style={styles.subTitle}>IsGluten Free</Text>
				<Switch 
				trackColor={{
					true: Colors.purple,
					false: Colors.grey3
				}}
				thumbColor={Colors.indigo}
				value={gluten} onValueChange={item=> setGluten(item)} />
			</View>

			<View style={styles.filterContainer}>
				<Text style={styles.subTitle}>Vegetarian</Text>
				<Switch 
				trackColor={{
					true: Colors.purple,
					false: Colors.grey3
				}}
				thumbColor={Colors.indigo}
				value={vegetarian} onValueChange={item=> setVegetarian(item)} />
			</View>
			<View style={styles.filterContainer}>
				<Text style={styles.subTitle}>Vegan</Text>
				<Switch 
				trackColor={{
					true: Colors.purple,
					false: Colors.grey3
				}}
				thumbColor={Colors.indigo}
				value={isVegan} onValueChange={item=> setIsVegan(item)} />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		backgroundColor:Colors.white,
		flex: 1
	},
	title: {
		fontSize: 22,
		fontFamily: 'open-sans-bold',
		textAlign: 'center',
		marginBottom: 30,
		marginTop: 20
	},
	filterContainer: {
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: "center",
		marginBottom: 15,
		marginHorizontal: 15
	},
	subTitle: {
		fontSize: 16,
		fontFamily: 'open-sans-bold',
	},

})

export default FiltersScreen 
