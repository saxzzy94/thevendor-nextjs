import { HYDRATE } from "next-redux-wrapper";
const initialState = {
	foreign: [],
	local: [],
	sport: [],
	loading: true,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "GET_FOREIGN":
			return {
				...state,

				foreign: action.payload,
				loading: action.loading,
			};
		case "GET_LOCAL":
			return {
				...state,
				loading: action.loading,
				local: action.payload,
			};
		case "GET_SPORT":
			return {
				...state,
				loading: action.loading,
				sport: action.payload,
			};
		case "GET_ERROR":
			return {
				...state,
				loading: action.loading,
				error: action.payload,
			};
		default:
			return state;
	}
};
