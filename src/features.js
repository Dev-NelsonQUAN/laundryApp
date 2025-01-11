import { createSlice } from "@reduxjs/toolkit";
const loc = JSON.parse(localStorage.getItem("user"))
const Slice = createSlice({
  name: "userDatas",
  initialState: {
    userdata: [] || loc,
    token: "",
  },
  reducers: {
    setUserdata: (state, action) => {
      state.userdata = action.payload;
      localStorage.setItem("user",  JSON.stringify(action?.payload))
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
    
  },
});

export const { setUserdata, setToken, clearToken } = Slice.actions;
export default Slice.reducer;
