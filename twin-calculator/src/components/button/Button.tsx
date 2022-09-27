import React from 'react'

interface Props {
    children: string | string[];
}

const Button = ({ children }: Props) =>
    <button className="keypad-button">
        {children}
    </button>

export default Button