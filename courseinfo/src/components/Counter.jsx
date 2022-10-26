import React, { useState } from "react"

const Display = ({ counter }) => <div>{counter}</div>

const Reset = ({ Reset }) => <div>{Reset}</div>

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const count = () => setCounter(counter + 1)
  const reset = () => setCounter(0)
  return (
    <div>
      <button onClick={count}>
        <Display counter={counter} />
      </button>
      <button onClick={reset}>
        <Reset Reset="Reset" />
      </button>
    </div>
  )
}
