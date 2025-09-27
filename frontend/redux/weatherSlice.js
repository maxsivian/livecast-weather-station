import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";

// const BASE_URL = "http://localhost:5001";  
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// const BASE_URL = "https://weather.maxsivian.com";
// console.log("BASE_URL", BASE_URL);

const forecastArraySize = 14
  
const delay = (seconds = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000 * seconds);
    })
}

const getWeekDaysArray = (startDate, size) => {
    let date = new Date(startDate)
    let dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    // console.log(startDate, size, dayOfWeek);

    let weekDaysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let startIndex = weekDaysArray.findIndex(v => v == dayOfWeek)
    // console.log("startIndex", startIndex);

    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(weekDaysArray[(startIndex + i) % 7]); // Add the correct day
    }
    // console.log("result", result);
    return result; 
}

const changeDateFormat = (oldformat) => {
    const date = new Date(oldformat);
    const formattedDate = date.toLocaleDateString("en-GB", { month: "short", day: "2-digit", year: "numeric" }).replace(",", ""); // Removes the comma
    // console.log(formattedDate); // Output: "Mar 19 2025"
    return formattedDate
}

export const fetchData = createAsyncThunk("weather/fetchData", async ({selectedOption : option , ...rest}, { rejectWithValue:reject }) => {
    try {
        // await delay(1)
        // console.log("fetchData called...");
        // console.log(option, ...rest);
        let obj = { option, ...rest }
        // console.log("obj", obj);
        const response = await fetch(`${BASE_URL}/getdata`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });
        
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message)
        }
        return data.data;
    } catch (error) {
        console.log("error.message", error.message);
        return reject(error.message);
    }
});


const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: "",

    // alerts: {},
    data: {},
    current: {},
    location: {},
    forecastArray: [],
    astroArray: [],
    airQualityArray: [],
    weekDaysArray: [],
    forecastSize: 0,
    airQualityArraySize: 0, 
    datesArray: [],
    selectedCountry: null,
    responseCountry: null,
    currentWeatherIcon: null
};


const handleSetSelectedCountry = (state, action)=>{
    state.selectedCountry = action.payload
}

const handleClearData = (state)=>{
    state.data =  {}
    state.current = {}
    state.location = {}
    state.forecastArray = []
    state.astroArray = []
    state.airQualityArray = []
    state.weekDaysArray = []
    state.forecastSiz = 0
    state.airQualityArraySize = 0,
    state.datesArray = []
    // state.selectedCountry = null
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setSelectedCountry: handleSetSelectedCountry,
        clearData: handleClearData,
        clearError: (state)=>{
            state.errorMsg = ""
        } 
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                const { alerts, location, current, forecast } = action.payload

                state.currentWeatherIcon = current.condition.icon.replaceAll("64", "128")
                // state.current = {...current, 
                //     condition: {
                //         ...current.condition,
                //         icon: updatedIcon
                //     }
                // }

                state.current = current

                state.data = action.payload
                state.alerts = alerts
                state.location = location
                
                state.forecastArray = forecast.forecastday.slice(0, forecastArraySize)
                state.forecastSize = state.forecastArray.length
                state.weekDaysArray = getWeekDaysArray(state.current.last_updated, state.forecastSize) //start date, size

                state.astroArray = []
                state.datesArray = []
                state.airQualityArray = []
        
                for (let i = 0; i < state.forecastArray.length; i++) {
                    let astroObj = {}
                    astroObj.date = state.forecastArray[i].date
                    astroObj.astro = state.forecastArray[i].astro
                    state.astroArray.push(astroObj)

                    if(state.forecastArray[i].day.air_quality){
                        let airQualityObj = {}
                        airQualityObj.date = state.forecastArray[i].date
                        airQualityObj.air_quality = state.forecastArray[i].day.air_quality
                        if(airQualityObj.air_quality?.aqi_data !== "null"){
                            state.airQualityArray.push(airQualityObj)
                        }
                    }

                    let dateString = changeDateFormat(state.forecastArray[i].date)
                    state.datesArray.push(dateString)
                }
                state.airQualityArraySize = state.airQualityArray.length
                state.isLoading = false;
            })
            .addCase(fetchData.rejected, (state, action) => {
                // console.log("action.payload", action.payload);
                // console.log("action.error", action.error);
                state.isLoading = false;
                state.isError = true;
                state.errorMsg = action.payload;
                // console.log("state.error", state.error);
            })
    }
})

export const { setSelectedCountry, clearData, clearError} = weatherSlice.actions

export default weatherSlice.reducer