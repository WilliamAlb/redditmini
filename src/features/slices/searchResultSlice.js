import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";


import {urlEndPoint } from "../../utils/CONSTS";


export const fetchSearchResults = createAsyncThunk(
    'searchResults/fetchSearch',
    async (query) =>{
        try{
            const response = await fetch(urlEndPoint+query);
            if(response.ok){
                return await response.json();
            }
        }
        catch(error){
            console.log(error);
        }

    }
);

const initialState = {
    searchResults:[],
    state:'idle'
}

const searchResultsReducer = createSlice({
    name:'searchResults',
    initialState:initialState,
    reducers:{

    },
    extraReducers:{
        [fetchSearchResults.pending]:(state)=>{
            state.state='loading';
        },
        [fetchSearchResults.fulfilled]:(state,action)=>{
            state.state='succeded';
            state.searchResults=action.payload.data.children;
        },
        [fetchSearchResults.rejected]:(state)=>{
            state.state='failed';
        },
    }

});

export default searchResultsReducer.reducer;

export const selectSearchResults = (state) => state.searchResults.searchResults;
export const selectSearchState = (state) => state.searchResults.state;