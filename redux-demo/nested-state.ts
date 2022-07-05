import { createStore } from 'redux';
import { produce } from 'immer';

interface State {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
}

const initialState = {
  name: 'John',
  address: {
    street: 'Beacon Ave S',
    city: 'Seattle',
    state: 'Washington ',
  },
};

type ActionType = { type: 'STREET_UPDATED'; payload: string };

const updateStreet = (payload: string): ActionType => ({
  type: 'STREET_UPDATED',
  payload,
});

const reducer = (state = initialState, action: ActionType): State => {
  switch (action.type) {
    case 'STREET_UPDATED':
      return produce(state, (draft: State) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log('Initial state - ', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('updated state - ', store.getState())
);

store.dispatch(updateStreet('717 S Lander St'));

export {};
