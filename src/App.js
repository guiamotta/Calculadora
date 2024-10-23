	import {useState} from 'react';
	
	function App() {

		const [calc, setCalc] = useState("");

		const [result, setResult] = useState("");

		const ops = ["+", "-", "*", "/"];

		const updateCalc = value => { /*resultado previo*/
			if((ops.includes(value) && calc === "") ||
			   (ops.includes(value) &&ops.includes(calc.slice(-1)))
			  )
			  {return;}
			setCalc(calc + value);
			if (!ops.includes(value)){
				setResult(eval(calc+value).toString());
			}
		}

		const calculate = () => { /*sinal de igual*/
			setCalc(eval(calc).toString());
		}

		const deleteLast = () => { /*deleta o último valor*/
			if(calc === ""){
				setResult(0);
				return;
			}
			const value = calc.slice(0, -1);
			setCalc(value);
		}

	return (
		<div className="app">
			<div className="calculadora">
				<div className="display">
					<div className="result">
						{result ? <span>({result})</span>: ""}
					</div>
					<div className="equacao">
						{calc||"0"}
					</div>
				</div>

				<div className="operadores">
					<button onClick={() => updateCalc("+")}>+</button>
					<button onClick={() => updateCalc("-")}>-</button>
					<button onClick={() => updateCalc("*")}>*</button>
					<button onClick={() => updateCalc("/")}>/</button>

					<button onClick={deleteLast}>DEL</button>
				</div>

				<div className="digitos">
				<button onClick={() => updateCalc("9")}>9</button>
				<button onClick={() => updateCalc("8")}>8</button>
				<button onClick={() => updateCalc("7")}>7</button>
				<button onClick={() => updateCalc("6")}>6</button>
				<button onClick={() => updateCalc("5")}>5</button>
				<button onClick={() => updateCalc("4")}>4</button>
				<button onClick={() => updateCalc("3")}>3</button>
				<button onClick={() => updateCalc("2")}>2</button>
				<button onClick={() => updateCalc("1")}>1</button>
				<button onClick={() => updateCalc("0")}>0</button>
				<button onClick={() => updateCalc(".")}>.</button>

				<button onClick={calculate}>=</button>
				</div>
			</div>
		</div>
	);
}

export default App;
