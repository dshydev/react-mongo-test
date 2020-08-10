import React, { useState, useEffect, Fragment, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';

function CustomForm() {
    return (
        <div className={'customForm'}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Primary"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Primary"
            />
            <TextField
                {...params}
                label="Bottle Forms"
                variant="outlined"
                onChange={onBottleInputChange}
                value={bottleInputValue}
            />
        </div>
    );
}

export default CustomForm;
