import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	modalOpen: false
}


const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setModal(state) {
			state.modalOpen = !state.modalOpen
		}
	}
})


export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;