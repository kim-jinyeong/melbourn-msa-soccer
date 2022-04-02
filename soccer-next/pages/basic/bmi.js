import React, { useState } from 'react' 
import style from "basic/style/bmi.module.css"

export default function Bmi (){

    const [inputs, setInputs] = useState({})
    const { name, weight, height } = inputs; // Object  Destructuring
    
    const handleChange = (e) => {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        let sum = (weight *10000/height/height).toFixed(2)
        alert(`${name}님의 bmi 지수 : ${sum}`)
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
    
    <input type="submit" onClick={handleClick} className={style.inputSubmit} value="Submit"/>
    </form>
    </div>)
}