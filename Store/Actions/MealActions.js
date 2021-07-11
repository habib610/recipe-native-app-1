export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const TOGGLE_ID = "TOGGLE_ID";

export const addFavoriteAction = (id) => {
	return {
		type: TOGGLE_FAVORITE,
		payload: id,
	};
};
