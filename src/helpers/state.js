import render from "./render";

// rudimentary state management
const state = [{}];

export const getState = () => {
  return state[state.length - 1];
};

export const setState = (nextState) => {
  const currentState = state[state.length - 1];
  state.push({
    ...currentState,
    ...nextState,
  })

  render(getState().targetId, getState().Layout);
};
