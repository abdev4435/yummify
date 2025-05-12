import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  restaurants: [],
  loading: false,
  error: null,
}

export const fetchRestaurants = createAsyncThunk("restuarants/allRestuarants", async () => {
  const response = await fetch("");
  const data = await response.json();
  return data;
})

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload;
      }),
      builder.addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
})
export default restaurantsSlice.reducer;