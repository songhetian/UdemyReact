import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";
import { useReducer } from "react";

function App() {
  const customer = useSelector((store) => store.customer);
  const fullName = customer.fullName;
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
      <Test />
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "jia":
      return { ...state, number: 101 };
    case "jian":
      return { ...state, number: 99 };
    default:
      return state;
  }
}

function Test() {
  const [state, dispatch] = useReducer(reducer, { number: 100 });

  return (
    <h1>
      <button onClick={() => dispatch({ type: "jia" })}>+</button>
      {state.number}
      <button onClick={() => dispatch({ type: "jian" })}>-</button>
    </h1>
  );
}

export default App;
