import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface iceCreamState {
  numOfIceCreams: number;
}

const initialState: iceCreamState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    orderIceCream: (state) => {
      state.numOfIceCreams--;
    },
    restockeIceCream: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
  },
});

export const {
  reducer: iceCreamReducer,
  actions: { orderIceCream, restockeIceCream },
} = iceCreamSlice;
