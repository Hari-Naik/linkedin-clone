import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showHeader: false
}

const headerSlice = createSlice({
	name: "showHeader",
	initialState,
	reducers: {
		setShowHeader: (state, action) => {
			state.showHeader = action.payload;
		}
	}
})

export const { setShowHeader } = headerSlice.actions;

export default headerSlice.reducer;