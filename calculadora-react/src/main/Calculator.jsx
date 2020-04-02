import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operationFunction: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState };

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation, operationFunction) {
        const equals = operation === '=';
        const currentOperationFunction = this.state.operationFunction;

        if (this.state.current === 0 && !equals) {
            this.setState({operationFunction, current:1, clearDisplay:true});
        }else if(currentOperationFunction){

            const values = [...this.state.values];
            values[0] = currentOperationFunction(values[0],values[1]);
            values[1] = 0;

            this.setState({
                displayValue: values[0],
                current:equals ? 0 : 1,
                clearDisplay: !equals,
                operationFunction: equals ? null : currentOperationFunction,
                values
            })
        
        }
    }

    addDigit(digit) {

        if (digit === '.' && this.state.displayValue.includes(digit)) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + digit;
        this.setState({ displayValue, clearDisplay: false })

        if (digit !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values });
        }
    }

    sum(n1,n2){
        return n1 + n2;
    }

    sub(n1,n2){
        return n1 - n2;
    }

    multiplication(n1,n2){
        return n1 * n2;
    }

    division(n1,n2){
        return n1 / n2;
    }



    render() {
        const addDigit = digit => this.addDigit(digit);
        const setOperation = operation => this.setOperation(operation);
        const setOperationSum = operation => this.setOperation(operation, this.sum);
        const setOperationSub = operation => this.setOperation(operation, this.sub);
        const setOperationMultiplication = operation => this.setOperation(operation, this.multiplication);
        const setOperationDivision = operation => this.setOperation(operation, this.division);
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={() => this.clearMemory()} triple />
                <Button label="÷" click={setOperationDivision} operation />
                <Button label="7" click={addDigit} />
                <Button label="8" click={addDigit} />
                <Button label="9" click={addDigit} />
                <Button label="×" click={setOperationMultiplication} operation />
                <Button label="4" click={addDigit} />
                <Button label="5" click={addDigit} />
                <Button label="6" click={addDigit} />
                <Button label="-" click={setOperationSub} operation />
                <Button label="1" click={addDigit} />
                <Button label="2" click={addDigit} />
                <Button label="3" click={addDigit} />
                <Button label="+" click={setOperationSum} operation />
                <Button label="0" click={addDigit} double />
                <Button label="." click={addDigit} />
                <Button label="=" click={setOperation} operation />
            </div>
        )
    }
}