import React, {useState} from 'react'


export default function Login(){
    const[inputs,setInputs] = useState({})
    const[result, setResult] = useState('')
    const{id, pw, name} = inputs;

    const handleChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({ ...inputs, [name] : value})
    }
    const handleClick = (e) =>{
        e.preventDefault()
        memberLogin({id, pw, name})
        .then(res => setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
   }

    return (<><h1>로그인폼</h1>
    <form>
    <div>
    <label><b>ID : </b></label>
    <input type="text" name = "id" onChange={handleChange} /><br />

    <label htmlFor=""><b>PW : </b></label>
    <input type="text" name = "pw" onChange={handleChange} /><br />

    <label htmlFor=""><b>Name : </b></label>
    <input type="text" name = "name" onChange={handleChange} /><br />

    <button onClick={handleClick}>제출</button>
    </div>
    <div>
    <button>Cancel</button><br />
    <span>비밀번호 <a>찾기</a></span>
    </div>
    </form>
    <div>계산결과 : {result}</div>
    </>
    )
}