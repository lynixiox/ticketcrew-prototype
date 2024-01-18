import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMobile: false,
    menuOpen: false
};

const isMobileState = createSlice({
    name: "isMobileState",
    initialState,
    reducers: {
        setMobileState(state, action){
            state.isMobile = action.payload;
        },
        setMenuOpenState(state,action){
            state.menuOpen = action.payload;
        }
    }
})


export const {setMobileState, setMenuOpenState} = isMobileState.actions;
export default isMobileState.reducer 