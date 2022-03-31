import React, { useState } from 'react' 


export default function Bmi (){

    const [inputs, setInputs] = useState({})
    const [res, setRes] = useState('')
    const { name, weight, height } = inputs; // Object  Destructuring
    
    const handleChange = (e) => {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        setRes(`${name}님의 bmi 지수 : ${(weight *10000/height/height).toFixed(2)}`)
    }

    return (<div>
    <form action = "">
    <h1>Bmi폼</h1>
    
    <label><b>Username</b></label>
    <input type="text" name = "name" onChange={handleChange} /><br />

    <label htmlFor=""><b>height</b></label>
    <input type="text" name = "height" onChange={handleChange} /><br />

    <label htmlFor=""><b>weight</b></label>
    <input type="text" name = "weight" onChange={handleChange} /><br />
    
    <button onClick={handleClick}>BMI 체크</button>
    </form>
    <div>BMI 결과 : {res}</div>
    </div>)
}