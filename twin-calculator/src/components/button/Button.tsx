import React from 'react'

const BUTTONSTYLE = {
    'function': 'keypad-button-function',
    'operator': 'keypad-button-operator',
    'operand': 'keypad-button-operand',
    'moveresult': 'keypad-button-moveresult',
}

interface Props {
    children: string | string[];
    variant: 'function' | 'operator' | 'operand' | 'moveresult',
    handleClick?: () => void
}

const Button = ({ children, variant, handleClick }: Props) =>
    <button className={`keypad-button ${BUTTONSTYLE[variant]}`} onClick={handleClick}>
        {children}
    </button>

export default Button