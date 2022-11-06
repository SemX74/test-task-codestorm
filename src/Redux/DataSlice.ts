import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Inputs } from "../Components/Form/Form";

export interface DataState {
  userData: Inputs;
  token: string;
}

const initialState: DataState = {
  userData: {
    email: "",
    password: "",
  },
  token: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = "";
    },
    setUserData: (state, action: PayloadAction<Inputs>) => {
      state.userData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, deleteToken, setUserData } = dataSlice.actions;

export default dataSlice.reducer;
