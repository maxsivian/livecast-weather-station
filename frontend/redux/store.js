import {configureStore} from "@reduxjs/toolkit"
import weatherReducer from "./weatherSlice"
import routeReducer from "./routeSlice"
import themesReducer from "./themesSlice"

export const store = configureStore({
    reducer:{
        weather: weatherReducer,
        route: routeReducer,
        themes: themesReducer
    }
})
 