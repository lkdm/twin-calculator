import React from 'react'
import Button from '../button/Button'

const Calculator = () =>
    <section className="calculator">
        <section className="display-result">1,335</section>
        <section className="display-calculationbuffer">89*15=1335</section>
        <section className="keypad-container">
            <Button variant="function">AC</Button>
            <Button variant="function">+/-</Button>
            <Button variant="function">%</Button>
            <Button variant="operator">/</Button>
            <Button variant="operand">7</Button>
            <Button variant="operand">8</Button>
            <Button variant="operand">9</Button>
            <Button variant="operator">*</Button>
            <Button variant="operand">4</Button>
            <Button variant="operand">5</Button>
            <Button variant="operand">6</Button>
            <Button variant="operator">-</Button>
            <Button variant="operand">1</Button>
            <Button variant="operand">2</Button>
            <Button variant="operand">3</Button>
            <Button variant="operator">+</Button>
            <Button variant="operand">0</Button>
            <Button variant="operand">.</Button>
            <Button variant="operator">=</Button>
        </section>
    </section>

export default Calculator