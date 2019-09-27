import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CounterState } from "../store/counter/types";
import { incrementCounter, decrementCounter } from "../store/counter/action";

interface CounterProps {
  increment: () => void;
  decrement: () => void;
  count: number;
}

const Counter = ({ increment, decrement, count }: CounterProps) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>-</button>
      <button onClick={decrement}>+</button>
    </div>
  );
};

const mapStateToProps = (state: CounterState) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
