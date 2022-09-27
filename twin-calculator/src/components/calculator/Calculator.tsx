import React from 'react'
import Button from '../button/Button'

const Calculator = () =>
    <section className="calculator">
        <section className="display-result">1,335</section>
        <section className="display-calculation">89*15=1335</section>
        <section className="keypad-container">
            <Button>AC</Button>
            <Button>+/-</Button>
            <Button>%</Button>
            <Button>/</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>*</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
            <Button>0</Button>
            <Button>.</Button>
            <Button>=</Button>
        </section>
    </section>

export default Calculator