import React, { useState } from 'react' 


export default function Calc(){
    const [inputs, setInputs] = useState({})
    const [res, setRes] = useState('')
    const {num1,opcode, num2} = inputs;
    
    const handleChange = (e) =>{
            e.preventDefault()
            const{value, name} = e.target;
            setInputs({ ...inputs, [name] : value})
        }
        const handleClick = (e) =>{
            e.preventDefault()
            switch(opcode){
                case "+":
                    return setRes(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`)
                case "-":
                    return setRes(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`)
                case "*":
                    return setRes(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`)                 
                case "/":
                    return setRes(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`)
                case "%":
                        return setRes(`${num1} % ${num2} = ${Number(num1) % Number(num2)}`)
            }
        }
    
        return <>
        <form action= "">
        <h1>Calc폼</h1>
        
        <label htmlFor = ""><b>Num1</b></label>
        <input type = "text" name = "num1" onChange={handleChange} /><br />
    
        <select htmlFor = "" name = "opcode" onChange={handleChange} >
        <option value = "">선택</option>    
        <option value = "+">+</option>
        <option value = "-">-</option>
        <option value = "*">*</option>
        <option value = "/">/</option>
        <option value = "%">%</option>
        </select>
        <br/>
        
        <label htmlFor = ""><b>Num2</b></label>
        <input type = "text" name = "num2" onChange={handleChange} /><br />
        
        <button onClick = {handleClick}>전송</button>
        </form>
        <div>계산결과 : {res}</div>
        </>
    }