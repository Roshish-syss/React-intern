import React, { useReducer } from 'react';
import { useMyContext } from '../components/Context';



function Counter() {
  // Initial state
const { initialState } = useMyContext();

console.log(initialState);

// Reducer function with no negative count
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count > 0 ? state.count - 1 : 0 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action type');
  } 
}
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>{' '}
      <button
        onClick={() => dispatch({ type: 'decrement' })}
        disabled={state.count === 0}
      >
        Decrement
      </button>{' '}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;