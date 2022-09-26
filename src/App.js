import {useState} from 'react';
function App() {

const[calc,setCalc]=useState("");
const[res,setRes]=useState("");
const ops=['/','+','-','.','*'];
const update=value=>{
if(
ops.includes(value) && calc ==='' || ops.includes(value) && ops.includes(calc.slice(-1))
)
{
return;
}
setCalc(calc+value);
}
const dig=()=>{
const digits=[];
for(let i=1;i<10;i++){
digits.push(
<button onClick={()=>update(i.toString())} key={i}>{i}</button>
)
}
return digits;
}
const eql=()=>{
setCalc(eval(calc).toString());
}
const del=()=>{
if(calc=='')
return;
const v=calc.slice(0,-1);
setCalc(v);
}
const clr=()=>{
setRes('');
setCalc('');
}
return (
<div>
<div className="App">
<div className="calc">
<div className="display">
{calc || "0"}
</div>
<div className="operators">
<button onClick={()=>update('/')}>/</button>
<button onClick={()=>update('*')}>*</button>
<button onClick={()=>update('+')}>+</button>
<button onClick={()=>update('-')}>-</button>
<button onClick={del}>DEL</button>
</div>
<div className="digits">
{dig()}
<button onClick={()=>update('0')}>0</button>
<button onClick={()=>update('.')}>.</button>
<button onClick={eql}>=</button>
</div>
</div>

</div>
<center className="clr"><button onClick={clr}>CLR</button></center>
</div>
);
}

export default App;
