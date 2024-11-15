import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";
// const rootReducer = combineReducers({
//                                         customer: customerReducer,
//                                         account:  accountReducer
//                                     });
//
// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );
const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer,
  },
});
export default store;
