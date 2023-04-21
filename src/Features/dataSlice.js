import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//creating data slice where we store our products
const dataSlice = createSlice({
	name: 'data',
	initialState: {
		data: [],
		searchData : [],
		singleData: [],
	},
	reducers: {
		Products_data(state, action) {
			state.data = action.payload;
		},
		single_product(state, action) {
			state.singleData = action.payload;
		}
	}
});

//creating thunk function to call async api
export function fetchData() {
	return async function fetchDataThunk(dispatch) {
		try {
			const res = await axios.get('http://localhost:3030/products');
			const data = await res.data;
			// console.log("data",data)
			dispatch(Products_data(data));
		} catch (error) {
			console.log(error);
		}
	};
}

export function fetchSingleData(id) {
	return async function fetchSingleDataThunk(dispatch) {
		try {
			const res = await axios.get(`http://localhost:3030/products/${id}`);
			const data = await res.data;
			// console.log("data",data)
			dispatch(single_product(data));
		} catch (error) {
			console.log(error);
		}
	};
}
//exporting reducers and actions
export default dataSlice.reducer;
export const { Products_data, single_product } = dataSlice.actions;
