import createDataContext from "./createDataContext";
import Api from "../utils/api";

const initialState = {
	items: [],
	message: "",
	error: "",
	loading: false,
};

const itemsReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "set_loading":
			return { ...state, loading: true };
		case "stop_loading":
			return { ...state, loading: false };
		case "list_items_success":
			return { ...state, items: payload.data, message: payload.message };
		case "list_items_error":
			return { ...state, error: payload.error };

		default:
			return state;
	}
};

const listItems = (dispatch) => {
	return (params) => {
		dispatch({ type: "set_loading" });
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
		dispatch({ type: "stop_loading" });
	};
};

export const { Context, Provider } = createDataContext(
	itemsReducer,
	{ listItems },
	initialState
);
