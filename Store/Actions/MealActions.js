export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const FILTER_MEAL = "FILTER_MEAL";

export const addFavoriteAction = (id) => {
	return {
		type: TOGGLE_FAVORITE,
		payload: id,
	};
};

export const filterMealAction = (filteredMeal) => {
	return { type: FILTER_MEAL, filters: filteredMeal };
};