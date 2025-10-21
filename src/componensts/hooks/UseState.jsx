import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1)
    }
     function decrease() {
        setCount(count - 1)
    }
  return (
    <>
    <div>
        <h1>UseState</h1>
        <button onClick={increase}>+</button>
        <br />
        <button>{count}</button>
        <br />
        <button onClick={decrease}>-</button>
        <hr />
    </div>
    </>
  )
}

export default UseState