export const initialCalculatorState = {
    message: '',
    value: '',
    result: 0,
};

export const calculorReducer = (state, action) => {
    const {payload, type} = action
    switch (type) {
        case 'calculate':
            const isValid = payload.match(/^[0-9*\-+]+$/)
            if(!isValid){
                return {...state, value : action.payload, message : 'invalid character !'};
            };
            if(payload.slice(-1).match(/^[*\-+]+$/)){
                return {...state, value : action.payload, message : ''};
            }

            const result = eval(payload)
            return {...state, result, value : action.payload, message : ''};


        case 'reset':
            return {...initialCalculatorState};


        default:
            throw new Error();
    }
}