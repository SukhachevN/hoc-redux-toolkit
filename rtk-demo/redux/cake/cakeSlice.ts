import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CakeState {
  numOfCakes: number;
}

const initialState: CakeState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    orderCake: (state) => {
      state.numOfCakes--;
    },
    restockeCake: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const {
  reducer: cakeReducer,
  actions: { orderCake, restockeCake },
} = cakeSlice;
