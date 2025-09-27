import { createSlice } from "@reduxjs/toolkit"

let validThemes = ["blue", "green", "pink", "violet"]

const getInitialState = () => {
    if (typeof window !== "undefined") {
        let theme = localStorage.getItem("theme")
        for(let i=0; i<validThemes.length; i++){
            if(theme === validThemes[i]){
                return theme
            }
        }
        return "blue";
    }
    return "blue"; // fallback for SSR
};

const initialState = {
    value: getInitialState()
};

const handleChangeColorTheme = (state, action) => {
    const mode = action.payload;
    state.value = mode;
    if (typeof window !== "undefined") {
        localStorage.setItem("theme", mode);
    }
};


export const themesSlice = createSlice({
    name: "themes",
    initialState,
    reducers: {
        changeColorTheme: handleChangeColorTheme
    }
});


export const { changeColorTheme } = themesSlice.actions;
export default themesSlice.reducer;
