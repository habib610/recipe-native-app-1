import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
	ImageBackground
} from "react-native";
import Colors from "../constant/Colors";

const MealItem = ({ itemData, onSelect }) => {

	return (
		<View style={styles.container}>
		<TouchableOpacity style={{justifyContent: "center"}} onPress={onSelect}>
				<ImageBackground style={styles.imgBg} resizeMode="cover" source={{uri: itemData.steps}} >
					<View style={styles.titleContainer}>
					<Text numberOfLines={1} style={styles.title}>{itemData.title}</Text>
					</View>
				</ImageBackground>
				<View style={styles.bottomContainer}>
				<Text style={styles.bottomTitle}>{itemData.duration}</Text>
				<Text style={styles.bottomTitle}>{itemData.imageUrl.toUpperCase()}</Text>
				<Text style={styles.bottomTitle}>{itemData.affordability.toUpperCase()}</Text>
				</View>
		</TouchableOpacity>
			</View>
	);
};
export default MealItem;

const styles = StyleSheet.create({
	container: {
		height: 200,
		backgroundColor: Colors.grey2,
		marginTop: 10,
		marginHorizontal: 10,
		borderRadius: 20
	},
	imgBg:{
		height: 160,
		maxHeight: "95%", 
		width: "100%", 
		backgroundColor: Colors.grey2,
		resizeMode: "cover",
		justifyContent: "flex-end",
		borderRadius: 20
	},
	titleContainer: {
		backgroundColor: "rgba(0,0,0,.4)",
		paddingVertical: 5,
		paddingHorizontal: 30,
	},
	title: {
		fontFamily: "open-sans-bold",
		color: "white",
		fontSize: 22,
		textAlign: "center"
	}, 
	bottomContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 40,
		paddingHorizontal: 10
	},
	bottomTitle:{
		fontFamily: "open-sans-bold"
	}
});
