import { store } from "./app/store.js";
import { cakeActions } from "./features/cake/cakeSlice.js";

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated State', store.getState());
})

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered(10));
store.dispatch(cakeActions.restocked(300));

unsubscribe();