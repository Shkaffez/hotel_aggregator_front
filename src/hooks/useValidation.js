import { useState, useEffect } from 'react';

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length > 0 && value.length < validations[validation] ? setMinLengthError(`Длина должна быть больше ${validations[validation]} символов\n`) 
                                                            : setMinLengthError(false)
                    break;

                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(`Длина должна быть меньше ${validations[validation]} символов\n`) 
                                                            : setMaxLengthError(false)
                    break;

                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty('Поле не может быть пустым\n')
                    break;                

                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError('Не корректный email\n')
                    break;
            
                default:
                    break;
            }
        }
    }, [value]);   

    const errors = [isEmpty, minLengthError, maxLengthError, emailError];

    return errors;
    
}