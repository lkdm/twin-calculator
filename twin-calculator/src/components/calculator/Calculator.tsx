import React, { useState } from 'react'
import useCalculate from '../../hooks/useCalculate';
import Button from '../button/Button'

const useBuffer = () => {
    const [buffer, setBuffer] = useState<number>(0);

    const readThenClearBuffer = () => {
        const mem = buffer;
        setBuffer(1);
        return mem;
    }

    return {
        readBuffer: readThenClearBuffer,
        setBuffer
    }
}



const Calculator = () => {
    const { result, add, subtract, multiply, divide, reset, invertSign, modulus } = useCalculate();
    const { setBuffer, readBuffer } = useBuffer();

    return <section className="calculator">
        <section className="display-result">{result.result}</section>
        <section className="display-calculationbuffer">89*15=1335</section>
        <section className="keypad-container">
            <Button variant="function" handleClick={() => reset()}>AC</Button>
            <Button variant="function"  handleClick={() => invertSign()}>+/-</Button>
            <Button variant="function" handleClick={() => modulus(readBuffer())}>%</Button>
            <Button variant="operator">/</Button>

            <Button variant="operand" handleClick={() => setBuffer(7)}>7</Button>
            <Button variant="operand" handleClick={() => setBuffer(8)}>8</Button>
            <Button variant="operand" handleClick={() => setBuffer(9)}>9</Button>
            <Button variant="operator" handleClick={() => multiply(readBuffer())}>*</Button>
            <Button variant="operand" handleClick={() => setBuffer(4)}>4</Button>
            <Button variant="operand" handleClick={() => setBuffer(5)}>5</Button>
            <Button variant="operand" handleClick={() => setBuffer(6)}>6</Button>
            <Button variant="operator">-</Button>
            <Button variant="operand" handleClick={() => setBuffer(1)}>1</Button>
            <Button variant="operand" handleClick={() => setBuffer(2)}>2</Button>
            <Button variant="operand" handleClick={() => setBuffer(3)}>3</Button>
            <Button variant="operator"handleClick={() => add(readBuffer())}>+</Button>
            <Button variant="operand" handleClick={() => setBuffer(0)}>0</Button>
            <Button variant="operand">.</Button>
            <Button variant="operator">=</Button>
        </section>
    </section>
}

export default Calculator