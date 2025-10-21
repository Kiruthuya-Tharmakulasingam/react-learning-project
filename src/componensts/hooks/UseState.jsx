import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(20)

    function increase() {
        setCount(count + 1)
    }
     function decrease() {
        setCount(count - 1)
        setAge(age - 1)
    }
    function raise() {
         setAge(age + 1)
    }

    function reduce() {
         setAge(age - 1)
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
    <div>
        <h1>Age : {age}</h1>
       <button style={style.container} onClick={raise}>Increase by 1</button> <br />
       <input type="text" value={age}></input><br />
       <button style={style.container} onClick={reduce}>Decrease by 1</button><br />
       <input type="text" value={age}></input><br />
    </div>
    </>
  )
}

const style ={
    container : {
        backgroundColor : "#ccc",
        borderRadius : "5px"
    }
}

export default UseState