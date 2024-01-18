import { configureStore } from "@reduxjs/toolkit";
import isMobileState from "./isMobile";
export const store = configureStore({
    reducer: {
        isMobileState
    },
})