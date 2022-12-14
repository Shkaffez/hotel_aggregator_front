import { useState } from 'react';
import { useValidation } from './useValidation';

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);

    const errors = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = (e) => {
        setDirty(true);
    }



    return {
        value,
        setValue,
        setDirty,
        onChange,
        onBlur,
        isDirty,
        errors
    }
}