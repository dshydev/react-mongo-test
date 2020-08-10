import React, { useState, useEffect, useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

function reducer(state, action) {
    return {...state, ...action.payload};
}

function CustomForm({ inputTypes, onSubmit, buttonDisabled }) {
    const [commentValue, setCommentValue] = useState('');
    const [customFormState, dispatch] = useReducer(reducer, {
        [inputTypes[0].key]: false,
        [inputTypes[1].key]: false,
    });

    const onChangeCheckbox = (key) => (event) => {
        const currentValue = customFormState[key];

        dispatch({
            payload: {
                [key]: !currentValue,
            }
        });
    };

    const onCommentChange = (event) => {
        setCommentValue(event.target.value);
    };

    const sendForm = () => {
        onSubmit({
            ...customFormState,
            comment: commentValue,
        });
    };

    return inputTypes ? (
        <div className={'customForm'}>
            {inputTypes.map((input) => (
                <FormControlLabel
                    key={input.key}
                    control={
                        <Checkbox
                            checked={customFormState[input.key]}
                            onChange={onChangeCheckbox(input.key)}
                            name={input.key}
                            color="primary"
                        />
                    }
                    label={input.name}
                />
            ))}
            <TextField
                label={'comment'}
                variant="outlined"
                onChange={onCommentChange}
                value={commentValue}
            />
            <Button
                variant={'contained'}
                color={'primary'}
                onClick={sendForm}
                disabled={buttonDisabled}
            >
                Send
            </Button>
        </div>
    ) : null;
}

export default CustomForm;
