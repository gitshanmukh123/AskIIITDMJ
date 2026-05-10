import { createSlice } from "@reduxjs/toolkit"

const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    setExchangeItems: (state, action) => {
      state.items = action.payload
      state.loading = false
    },
    setExchangeLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { setExchangeItems, setExchangeLoading } = marketplaceSlice.actions
export default marketplaceSlice.reducer
