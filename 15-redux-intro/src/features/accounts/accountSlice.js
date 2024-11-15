import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.balance -= action.payload;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

// console.log(accountSlice);
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    //访问api
    const res = await fetch(
      `https://api.frankfurter.app/latest?base=${currency}&symbols=USD`
    );
    const data = await res.json();

    const converted = (amount * data.rates.USD).toFixed(2);
    //修改数据
    dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;

// export default function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: parseFloat(action.payload) + parseFloat(state.balance),
//         isLoading: false,
//       };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//         loan: 0,
//         loanPurpose: "",
//       };
//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };
//     default:
//       return state;
//   }
// }
//
// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };
//
//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" });
//     //访问api
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?base=${currency}&symbols=USD`
//     );
//     const data = await res.json();
//
//     const converted = (amount * data.rates.USD).toFixed(2);
//     //修改数据
//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }
//
// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }
//
// export function requestLoan(amount, purpose) {
//   return { type: "account/requestLoan", payload: { amount, purpose } };
// }
//
// export function payLoan(amount) {
//   return { type: "account/payLoan", payload: amount };
// }
