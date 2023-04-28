const BaseNumberInput = ({name, value, onChange}) => {
    return (
        <input 
            type="number" 
            name={name}
            value={value} 
            onChange={onChange} />
    );
}

export default BaseNumberInput;