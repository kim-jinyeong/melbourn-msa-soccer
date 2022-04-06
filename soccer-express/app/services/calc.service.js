exports.computeCalc = (payload) =>{
    const{num1, opcode, num2} = payload
    let _num1 = Number(num1);
    let _num2 = Number(num2);
    const result = {num1, opcode, num2}
    console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
    switch(opcode){
      case "+":result.calc = _num1 + _num2; break;
      case "-":result.calc = _num1 - _num2; break;
      case "*":result.calc = _num1 * _num2; break;               
      case "/":result.calc = _num1 / _num2; break;
      case "%":result.calc = _num1 % _num2; break;
      }
      return result
  }