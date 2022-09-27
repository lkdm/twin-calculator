import React from 'react'

const BUTTONSTYLE = {
    'function': 'keypad-button-function',
    'operator': 'keypad-button-operator',
    'operand': 'keypad-button-operand',
    'moveresult': 'keypad-button-moveresult',
}

interface Props {
    children: string | string[];
    variant: 'function' | 'operator' | 'operand' | 'moveresult'
}

const Button = ({ children, variant }: Props) =>
    <button className={`keypad-button ${BUTTONSTYLE[variant]}`}>
        {children}
    </button>

export default Button