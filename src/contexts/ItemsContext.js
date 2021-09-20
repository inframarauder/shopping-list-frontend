import createDataContext from "./createDataContext";
import Api from "../utils/api";

const initialState = {
	items: [],
	message: "",
	error: "",
};

const itemsReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "list_items_success":
			return { ...state, items: payload.data, message: payload.message };
		case "list_items_error":
			return { ...state, error: payload.error };

		default:
			return state;
	}
};

const listItems = (dispatch) => {
	return (params, callback) => {
		Api.listItems(params)
			.then((response) => {
				const { data, message } = response.data;
				dispatch({
					type: "list_items_success",
					payload: { data, message },
				});
			})
			.catch((error) => {
				console.error(error);
				dispatch({
					type: "list_items_error",
					payload: {
						error: error?.response?.data?.message || "Something went wrong!",
					},
				});
			});
		callback && callback();
	};
};

export const { Context, Provider } = createDataContext(
	itemsReducer,
	{ listItems },
	initialState
);
