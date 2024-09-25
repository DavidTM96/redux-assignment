import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

type StateType = UserType;

const initialState: StateType = {
  id: "1",
  firstName: "Cillian",
  lastName: "Murphy",
  age: 34,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrementAge: (state) => {
      state.age += 1;
    },
  },
});

export const { incrementAge } = userSlice.actions;
export const userReducer = userSlice.reducer;
