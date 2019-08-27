export const addToCounter = (store, amount) => {
  const counter = store.state.counter + amount;
  store.setState({ counter });
};

export const addToCounterTwo = (store, amount) => {
  const counterTwo = store.state.counterTwo + amount;
  store.setState({ counterTwo });
};
