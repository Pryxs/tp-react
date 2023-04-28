import { useReducer } from 'react';
import Button from '../components/base/Button'
import { initialCalculatorState, calculorReducer } from '../reducers/calculatorReducer';

const Calculator = () => {
    const [state, dispatch] = useReducer(calculorReducer, initialCalculatorState);

    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const operators = ['+', '-', '*'];

    const getButton = value => {
        return (
            <Button 
                key={value}
                text={`${value}`} 
                action={() => dispatch({ 
                    type: "calculate",
                    payload: state.value + value,
                })} 
            />
        )
    }

    return (
        <div className="calculator">
            <div className="result">
                {state.result}
            </div>
            <div className="screen">
                <input 
                    type="text"
                    pattern="[0-9]"
                    onChange={(e) => dispatch({ 
                        type: "calculate",
                        payload: e.target.value,
                    })} 
                    value={state.value}
                />
                <div className="alert">{state.message}</div>
            </div>

            <div className="numbers">
                {digits.map(digit => getButton(digit))}
            </div>

            <div className="operators">
                {operators.map(operator => getButton(operator))}
            </div>

            <div className="tools">
                <Button 
                    text="Reset" 
                    action={(e) => dispatch({ 
                        type: "reset",
                    })}
                />
            </div>
        </div>
    );
}

export default Calculator;