import { MEALS } from "../../data/16.2 dummy-data";
import { TOGGLE_FAVORITE, TOGGLE_ID } from "../Actions/MealActions";
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
				// return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
			}

		default:
			return state;
	}
	return state;
};

export default mealReducer;
