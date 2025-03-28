import { configureStore, createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "queries",
  initialState: { queries: [], loading: false, error: null },
  reducers: {
    submitQuery: (state) => {
      state.loading = true;
      state.error = null;
    },
    querySuccess: (state, action) => {
      state.loading = false;
      state.queries.unshift(action.payload);  
    },
    queryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { submitQuery, querySuccess, queryFailure } = querySlice.actions;
const store = configureStore({ reducer: { queries: querySlice.reducer } });
export default store;
