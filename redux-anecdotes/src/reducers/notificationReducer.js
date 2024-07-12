import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    newNotification(state, action) {
      return action.payload;
    },
  },
});

export const { newNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
