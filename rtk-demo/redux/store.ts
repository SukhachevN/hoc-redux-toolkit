import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { cakeReducer } from './cake/cakeSlice';
import { iceCreamReducer } from './iceCream/iceCreamSlice';
import { userReducer } from './user/userSlice';

const logger = createLogger();

const store = configureStore({
  reducer: { cake: cakeReducer, iceCream: iceCreamReducer, user: userReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
