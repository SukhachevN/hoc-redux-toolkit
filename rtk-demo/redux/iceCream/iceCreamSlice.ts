import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { orderCake } from '../cake/cakeSlice';

interface iceCreamState {
  numOfIceCreams: number;
}

const initialState: iceCreamState = {
  numOfIceCreams: 10,
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
  extraReducers: (builder) => {
    builder.addCase(orderCake, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export const {
  reducer: iceCreamReducer,
  actions: { orderIceCream, restockeIceCream },
} = iceCreamSlice;
