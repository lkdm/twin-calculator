import React from 'react'

interface Props {
    children: string | string[];
}

const Button = ({ children }: Props) =>
    <button>
        {children}
    </button>

export default Button