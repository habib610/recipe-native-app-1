import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constant/Colors';
import { CATEGORIES } from '../data/16.2 dummy-data';

const CategoriesScreen = ({navigation}) => {
	
	const navigateScreen = (itemData) => {
		navigation.navigate('Meals', {
			name: itemData.item.title,
			bar: itemData.item.color,
			itemData: itemData
			})
	}
	const renderGridList = (itemData) => {
		return ( <CategoryGridTile 
					onSelect ={()=> navigateScreen(itemData)} 
					itemData={itemData} />)
	}
	return (
		<FlatList 
		contentContainerStyle={{
			backgroundColor: Colors.white
		}}
		data={CATEGORIES}
		keyExtractor={item => item.id}
		numColumns={2}
		renderItem={renderGridList}
		/>
	);
};

const styles = StyleSheet.create({
	screen: {
		justifyContent: "center",
		alignItems: "center"
	},
	girdItem: {
		flex: 1,
		height: 150,
		margin: 15,
		backgroundColor: Colors.red
	}
})

export default CategoriesScreen;
