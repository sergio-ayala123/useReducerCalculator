import React, { useReducer, useRef } from 'react'

const Calculator = () => {

    type action = {
        type: string
        payload: number
    }


    type State = {
        result: number
    }


    const num1 = useRef<HTMLInputElement>(null)
    const num2 = useRef<HTMLInputElement>(null)

    const initialState = { result: 0 }

    function reducer(state: State, action: action) {
        switch (action.type) {
            case "add":
                return { result: Number(num1.current!.value) + Number(num2.current!.value) };
            case "subtract":
                return { result: Number(num1.current!.value) - Number(num2.current!.value) };
            case "multiply":
                return { result: Number(num1.current!.value) * Number(num2.current!.value) };
            case "divide":
                return { result: Number(num1.current!.value) / Number(num2.current!.value) };
            default:
                return state
        }
    }

    function add() {
        dispatch({ type: "add", payload: 0 })
    }
    function subtract() {
        dispatch({ type: "subtract", payload: 0 })
    }function multiply() {
        dispatch({ type: "multiply", payload: 0 })
    }function divide() {
        dispatch({ type: "divide", payload: 0 })
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div style={{position:'relative',  display: 'center', justifyContent: 'center', border: 'solid', padding:'3em' }}>
            <div>
                
            <button onClick={add}>Add</button>
            <button onClick={subtract}>Subtract</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>

            </div>
            <input ref={num1} />
            <input ref={num2} />
        <div style={{position:'absolute', bottom : 0, justifyContent:'center', display:'flex'}}>
            <h1>Result is: {state.result}</h1>
        </div>
        </div>
    );
}

export default Calculator;