import { store } from "./app/store.js";
import { cakeActions } from "./features/cake/cakeSlice.js";
import {  iceCreamActions } from "./features/iceCream/iceCreamSlice.js";

import { fetchUsers } from "./features/user/userSlice.js";

console.log('Initial Store State', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated Store State', store.getState());
})

// dispatch cake actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered(10));
store.dispatch(cakeActions.restocked(300));


// dispatch iceCream actions
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered(5));
store.dispatch(iceCreamActions.restocked(30));

// dispatch Async action
store.dispatch(fetchUsers());

unsubscribe();