import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { user: action.payload, isAuthenticated: true };
    case "logout":
      return { user: null, isAuthenticated: false };
    default:
      throw new Error("没有该类型");
  }
}

FakeAuthProvider.propTypes = {
  children: PropTypes.node,
};

function FakeAuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useFakeAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("上下文错误");
  }
  return context;
}

export { FakeAuthProvider, useFakeAuth };
