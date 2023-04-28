import { useState } from 'react';
import BaseNumberInput from '../components/baseNumber/BaseNumberInput'

const BaseNumber = () => {
    const [decimal, setDecimal] = useState(0)
    const [binary, setBinary] = useState(0)
    const [binaryError, setBinaryError] = useState('')

    const handleChange = e => {
        const {name, value} = e.target

        switch (name) {
            case 'decimal':
                setDecimal(value)
                setBinary(Number(value).toString(2))
                break;

            case 'binary':
                setBinaryError('')

                if(!value.match(/^[0-1.-]+$/)) setBinaryError('Invalid Number')
                
                setBinary(value)
                setDecimal(parseInt(value, 2))    
                break;
                
            default:
                throw new Error('Unkown case')
        }
    }

    return (
        <div className="convertor">
            Decimal :
            <BaseNumberInput 
                name="decimal"
                value={decimal}
                onChange={(e) => handleChange(e)}
            />
            <div style={{margin: '1rem'}} />
            Binary : 
            <BaseNumberInput 
                name="binary"
                value={binary}
                onChange={(e) => handleChange(e)}
            />
            {binaryError && (
                <div className="alert">{binaryError}</div>
            )}
        </div>
    );
}

export default BaseNumber;