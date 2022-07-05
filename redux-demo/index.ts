import {
  createStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();

type CakeActionType =
  | { type: 'CAKE_ORDERED' }
  | { type: 'CAKE_RESTOCKED'; payload: number };

type IceCreamActionType =
  | { type: 'ICECREAM_ORDERED' }
  | { type: 'ICECREAM_RESTOCKED'; payload: number };

const orderCake = (): CakeActionType => ({
  type: 'CAKE_ORDERED',
});

const restokeCake = (payload: number): CakeActionType => ({
  type: 'CAKE_RESTOCKED',
  payload,
});

const orderIceCream = (): IceCreamActionType => ({
  type: 'ICECREAM_ORDERED',
});

const restokeIceCream = (payload: number): IceCreamActionType => ({
  type: 'ICECREAM_RESTOCKED',
  payload,
});

interface CakeState {
  numOfCakes: number;
}

interface IceCreamState {
  numOfIceCreams: number;
}

const initialCakeState: CakeState = {
  numOfCakes: 10,
};

const initialIceCreamState: IceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (
  state = initialCakeState,
  action: CakeActionType
): CakeState => {
  switch (action.type) {
    case 'CAKE_ORDERED':
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case 'CAKE_RESTOCKED':
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (
  state = initialIceCreamState,
  action: IceCreamActionType
): IceCreamState => {
  switch (action.type) {
    case 'ICECREAM_ORDERED':
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case 'ICECREAM_RESTOCKED':
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

const actions = bindActionCreators(
  { orderCake, restokeCake, orderIceCream, restokeIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.orderIceCream();
actions.orderIceCream();

actions.restokeCake(100);
actions.restokeIceCream(20);

export {};
