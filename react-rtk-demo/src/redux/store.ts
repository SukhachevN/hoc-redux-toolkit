import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cakeReducer } from './cake/cakeSlice';
import { iceCreamReducer } from './iceCream/iceCreamSlice';
import { userReducer } from './user/userSlice';

const store = configureStore({
  reducer: { cake: cakeReducer, iceCream: iceCreamReducer, user: userReducer },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, useAppDispatch, useAppSelector };
