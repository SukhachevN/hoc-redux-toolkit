import { store } from './redux/store';
import { orderCake, restockeCake } from './redux/cake/cakeSlice';
import {
  orderIceCream,
  restockeIceCream,
} from './redux/iceCream/iceCreamSlice';
import { fetchUsers } from './redux/user/userSlice';

console.log('Initial state - ', store.getState());

// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockeCake(100));

// store.dispatch(orderIceCream());
// store.dispatch(orderIceCream());
// store.dispatch(orderIceCream());

// store.dispatch(restockeIceCream(20));

store.dispatch(fetchUsers());

// unsubscribe();
