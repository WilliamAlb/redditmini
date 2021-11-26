import { configureStore } from "@reduxjs/toolkit";

import searchResultsReducer from "../features/slices/searchResultSlice";

export const store = configureStore({
    reducer:{
        searchResults:searchResultsReducer
    }
})