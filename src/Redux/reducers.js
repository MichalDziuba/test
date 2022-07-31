import { createAction, createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { fetchData } from "../Features/API/api";
const initialState = {
    cities: [],
    cityName: "",
    country:"",
    currentTemp: 0,
    minTemp: 0,
    maxTemp: 0,
    sunrise: null,
    sunset: null,
    isLoading: false,
};
export const asyncFetchData = createAsyncThunk(
    "weather/fetchData",
    async (city) => {
        const response = await fetchData(city);
        console.log(response)
        console.log(city)
        return response.data
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialState,
    reducers: {
        addCity: (state, action) => {
            
            state.cities.push(action.payload)
        },
        extraReducers: (builder) => {
            builder
                .addCase(asyncFetchData.fulfilled, (state, action) => {
                    return state.isLoading=true
                })
        }
   
    }
})
export const select = (state) => (state.weather.cityName);

export const { addCity,setCityName } = weatherSlice.actions;
export default weatherSlice.reducer;
