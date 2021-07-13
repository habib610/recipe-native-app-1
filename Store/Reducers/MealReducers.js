import { MEALS } from "../../data/16.2 dummy-data";
import {
	FILTER_MEAL,
	TOGGLE_FAVORITE,
	TOGGLE_ID,
} from "../Actions/MealActions";
const arraysItem = [
	{
		id: "1",
		name: "Mango",
	},
	{
		id: "2",
		name: "Apple",
	},
	{
		id: "3",
		name: "Banana",
	},
	{
		id: "4",
		name: "Orange",
	},
];

const initialState = {
	allMeals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const existingMeal = state.favoriteMeals.find(
				(meal) => meal.id === action.payload
			);
			if (existingMeal) {
				const updateMeals = state.favoriteMeals.filter(
					(item) => item.id !== action.payload
				);
				return { ...state, favoriteMeals: [...updateMeals] };
			} else {
				const meal = state.allMeals.find(
					(item) => item.id === action.payload
				);
				return {
					...state,
					favoriteMeals: [...state.favoriteMeals, meal],
				};
			}
		case FILTER_MEAL:
			const appliedFilter = action.filters;
			const newFilteredMeals = state.allMeals.filter((item) => {
				if (appliedFilter.isGlutenFree && !item.isGlutenFree) {
					return false;
				}
				if (appliedFilter.isVegetarian && !item.isVegetarian) {
					return false;
				}
				if (appliedFilter.isVegan && !item.isVegan) {
					return false;
				} else {
					return true;
				}
			});
			return { ...state, filteredMeals: newFilteredMeals };
		default:
			return state;
	}
};

export default mealReducer;
