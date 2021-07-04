import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from "react-native";
import Colors from "../constant/Colors";

const CategoryGridTile = ({ itemData, onSelect }) => {
	let TouchableComp = TouchableOpacity;
	if (Platform.OS === "android" && Platform.Version >= 21) {
		TouchableComp = TouchableNativeFeedback;
	}
	return (
		<View style={[styles.girdItem]}>
			<TouchableComp onPress={onSelect}>
				<View
					style={[
						styles.container,
						{ backgroundColor: itemData.item.color },
					]}
				>
					<Text numberOfLines={2} style={styles.title}>
						{itemData.item.title}
					</Text>
				</View>
			</TouchableComp>
		</View>
	);
};
export default CategoryGridTile;

const styles = StyleSheet.create({
	girdItem: {
		flex: 1,
		height: 150,
		margin: 15,
	},
	container: {
		flex: 1,
		shadowColor: Colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 3,
		shadowRadius: 12,
		borderRadius: 12,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		padding: 15,
	},
	title: {
		fontFamily: "open-sans-bold",
		fontWeight: "bold",
		fontSize: 22,
		textAlign: "right",
		color: Colors.white,
	},
});
