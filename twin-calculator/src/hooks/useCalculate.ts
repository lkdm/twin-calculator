import React, { useReducer } from 'react'

const ACTIONKIND = {
	ADD: 'add',
	SUBTRACT: 'subtract',
	MULTIPLY: 'multiply',
	DIVIDE: 'divide',
	EQUALS: 'equals',
    SET: 'set',
    INVERTSIGN: 'invertsign',
    MODULUS: 'modulus'
} as const

interface CalculationAction {
    type: typeof ACTIONKIND[keyof typeof ACTIONKIND],
    payload: number
}

interface CalculationState {
    result: number
}

const reducer = (state: CalculationState, action: CalculationAction) =>  {
	switch (action.type) {
		case ACTIONKIND.ADD:
			return { ...state, result: state.result + action.payload }
		case ACTIONKIND.SUBTRACT:
			return { ...state, result: state.result - action.payload }
		case ACTIONKIND.MULTIPLY:
			return { ...state, result: state.result * action.payload }
		case ACTIONKIND.DIVIDE:
			return { ...state, result: state.result / action.payload }
		case ACTIONKIND.MODULUS:
			return { ...state, result: state.result % action.payload }
		case ACTIONKIND.SET:
			return { ...state, result: 0 }
		case ACTIONKIND.INVERTSIGN:
			return { ...state, result: state.result * -1 }
		default: {
            console.log('[ERR] Reducer function not implemented.')
			return state
        }
    }
}

interface Payload {
    result: number
}

const useCalculate = () => {
    const [state, dispatch] = useReducer(reducer, { result: 0 })

    const add = (n: number) => dispatch({ type: ACTIONKIND.ADD, payload: n })
	const subtract = (n: number) => dispatch({ type: ACTIONKIND.SUBTRACT, payload: n })
	const multiply = (n: number) => dispatch({ type: ACTIONKIND.MULTIPLY, payload: n })
	const divide = (n: number) => dispatch({ type: ACTIONKIND.DIVIDE, payload: n })
	const reset = () => dispatch({ type: ACTIONKIND.SET, payload: 0 })
	const invertSign = (n: number) => dispatch({ type: ACTIONKIND.INVERTSIGN, payload: n })
	const modulus = (n: number) => dispatch({ type: ACTIONKIND.MODULUS, payload: n })
    return {
        add,
        subtract,
        multiply,
        divide,
        reset,
        invertSign,
        modulus
    }
}
export default useCalculate