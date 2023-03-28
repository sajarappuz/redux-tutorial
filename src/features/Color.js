import { createSlice } from '@reduxjs/toolkit'

//passing initialvalue to a variable
const initialStateValue = "";

//creating slice
export const colorSlice = createSlice({
    name:"user",
    initialState:{ value: initialStateValue},
   //creating reducers
    reducers:{
        changeColor: (state,action) =>{
            state.value = action.payload;
        },
        
    },
});
//export actions in redux toolkit
export const { changeColor } = colorSlice.actions;
//exporting reducer
export default colorSlice.reducer;