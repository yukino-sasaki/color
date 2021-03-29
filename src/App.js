import React, { useState } from 'react'

//const array = [];

const App = () => {
  const [value, setValue] = useState([])

  const addHandler = () => {
    console.log('mm')
    //value.push('COLOR')
    setValue([...value, 'color'])
  }
  console.log(value)

  const deleteHandler = () => {
    //const deletearray = value.map(s=>split('')
    //value.splice(index, 1)
    /* const uparray = value.join('') 
    var values = value */
    setValue([...value].splice(1, value.length - 1))
  }

  const style = {
    backgroundColor: 'lightgreen',

    display: 'inline-block'
  }

  return (
    <>
      <input
        type="button"
        value="click!"
        onClick={() => { addHandler() }}
      />
      {/* {value.map((values, i) => {
        return <div key={i} style={style}>{values}</div>
      })} */}
      {/* <div>{value}</div> */}
      <div style={style} onClick={() => deleteHandler(value.slice(-1)[0])}>{value}</div>
    </>//valueが配列全体を指してしまっているので配列の
  )
}

export default App;
