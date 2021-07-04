import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constant/Colors";

const CustomHeader = (props) => {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={Platform.OS === "android" ? Colors.indigo : Colors.purple}
		/>
	);
};

export default CustomHeader;

const styles = StyleSheet.create({});
