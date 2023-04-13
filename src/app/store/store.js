import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modalSlice";
import headerReducer from "../features/headerSlice";




export const store = configureStore({
	reducer: {
		modal: modalReducer,
		showHeader: headerReducer,
	}
})