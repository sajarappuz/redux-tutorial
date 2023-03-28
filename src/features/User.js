import { createSlice } from '@reduxjs/toolkit'

//passing initialvalue to a variable
const initialStateValue = {name:"", age:0,email:""};

//creating slice
export const userSlice = createSlice({
    name:"user",
    initialState:{ value: {name:"", age:0,email:""}},
   //creating reducers
    reducers:{
        login: (state,action) =>{
            state.value = action.payload;
        },
        logout:(state)=>{
            state.value = initialStateValue; //accessing initialstate by that variable
        }
    },
});
//export actions in redux toolkit
export const {login, logout} = userSlice.actions;
//exporting reducer
export default userSlice.reducer;