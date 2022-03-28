import React, { useState } from 'react'


export default function Grade(){
    const[inputs,setInputs] = useState({})
    const[result,setResult] = useState('')
    const{name,kor,eng,math} = inputs;

    const handleChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({ ...inputs, [name] : value})
    }
    const handleClick = (e) =>{
        e.preventDefault()
        memberGrade({name, kor, eng, math})
        .then(res => setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
    }
    
    return <><h1>Grade폼</h1>
    <form action = ''>

    <label><b>username</b></label>
    <input type="text" name = "username" onChange={handleChange} /><br />

    <label htmlFor=""><b>kor</b></label>
    <input type="text" name = "kor" onChange={handleChange} /><br />

    <label htmlFor=""><b>eng</b></label>
    <input type="text" name = "eng" onChange={handleChange} /><br />

    <label htmlFor=""><b>math</b></label>
    <input type="text" name = "math" onChange={handleChange} /><br />

    <button onClick={handleClick}>전송</button>
    
    <div>결과 : {result}</div>
    </form>   
    </>
}