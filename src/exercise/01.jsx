// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js
// @ts-nocheck
import {useReducer} from 'react'

const enums = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

function countReducer(state, action) {
  const {type, payload} = action

  switch (type) {
    case enums.INCREMENT:
      return {...state, count: state.count + payload}

    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = useReducer(countReducer, {count: initialCount})
  const {count} = state

  const increment = () => dispatch({type: enums.INCREMENT, payload: step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
