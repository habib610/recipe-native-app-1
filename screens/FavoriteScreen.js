import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FavoriteScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>FavoriteScreen Screen</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		justifyContent: "center",
		alignItems: "center"
	}
})

export default FavoriteScreen 
