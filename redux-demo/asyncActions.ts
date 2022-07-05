import fetch from 'node-fetch';
import { createStore, applyMiddleware, AnyAction, Dispatch } from 'redux';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';

const url = 'https://jsonplaceholder.typicode.com/users';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface UsersState {
  loading: boolean;
  data: User[];
  error: string | null;
}

const usersState: UsersState = {
  loading: false,
  data: [],
  error: null,
};

type UsersActionType =
  | { type: 'FETCH_USERS_REQUEST' }
  | { type: 'FETCH_USERS_SUCCESS'; payload: User[] }
  | { type: 'FETCH_USERS_FAIL'; payload: string };

const fetchUsersRequest = (): UsersActionType => ({
  type: 'FETCH_USERS_REQUEST',
});

const fetchUsersSuccess = (payload: User[]): UsersActionType => ({
  type: 'FETCH_USERS_SUCCESS',
  payload,
});

const fetchUsersFail = (payload: string): UsersActionType => ({
  type: 'FETCH_USERS_FAIL',
  payload,
});

const fetchUsers = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchUsersRequest());
    const response = await fetch(url);
    const result: User[] = await response.json();
    dispatch(fetchUsersSuccess(result));
  } catch (error) {
    dispatch(fetchUsersFail(error as string));
  }
};

const usersReducer = (state = usersState, action: UsersActionType) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'FETCH_USERS_FAIL':
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(usersReducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));

// vẫn chưa biết như thế nào làm tốt hơn
store.dispatch(fetchUsers() as unknown as UsersActionType);

export {};
