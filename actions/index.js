import news from "../api/news";

export const getForeign = () => async dispatch => {
	try {
		const res = await news.get("/foreign");

		dispatch({
			type: "GET_FOREIGN",
			payload: res.data.sortedArr,
		});
	} catch (error) {
		dispatch({
			type: "GET_ERROR",
			payload: true,
		});
	}
};

export const getLocal = () => async dispatch => {
	try {
		const res = await news.get("/");

		dispatch({
			type: "GET_LOCAL",
			payload: res.data.sortedArr,
		});
	} catch (error) {
		dispatch({
			type: "GET_ERROR",
			payload: true,
		});
	}
};
export const getSport = () => async dispatch => {
	try {
		const res = await news.get("/sport");

		dispatch({
			type: "GET_SPORT",
			payload: res.data.sortedArr,
		});
	} catch (error) {
		dispatch({
			type: "GET_ERROR",
			payload: true,
		});
	}
};
