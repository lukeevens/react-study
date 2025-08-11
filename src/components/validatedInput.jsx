import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react';

const ValidatedInput = forwardRef(({ validate }, ref) => {
    const inputRef = useRef(null);
    const [error, setError] = useState(null);

    useImperativeHandle(ref, () => ({
        getValue: () => inputRef.current.value,
        validate: () => {
            const isValid = validate(inputRef.current.value);
            setError(isValid ? null : 'Invalid input');
            return isValid;
        },
        focus: () => inputRef.current.focus()
    }))

    return (
        <div>
            <input ref={inputRef} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    )
})

export default ValidatedInput;