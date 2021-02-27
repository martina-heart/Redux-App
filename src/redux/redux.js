import { createStore } from "redux";

const INITIAL_STATE = {
  counter: 25,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state }; // --> {counter: 0}
      break;
  }
};

const store = createStore(reducer);

export { store };
