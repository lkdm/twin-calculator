import React, { useReducer } from 'react'

const ACTIONKIND = {
	ADD: 'add',
	SUBTRACT: 'subtract',
	MULTIPLY: 'multiply',
	DIVIDE: 'divide',
	EQUALS: 'equals',
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
    return {
        add,
        subtract
    }
}
export default useCalculate