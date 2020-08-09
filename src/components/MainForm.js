import React, { useState, useEffect, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import api from '../api';

function MainForm() {
    const [open, setOpen] = useState(false);
    const [bottleForms, setBottleForms] = useState([]);
    const [beerBrands, setBeerBrands] = useState([]);
    const isBottlesFetch = open && bottleForms.length === 0;
    const isBeerBrandsFetch = open && beerBrands.length === 0;

    useEffect(() => {        
        if (!isBottlesFetch) {
            return undefined;
        }
        (async () => {
            const bottleForms = await api.getBottleForms();
            console.log('bottle forms', bottleForms)
            setBottleForms(bottleForms);
        })();
    }, [isBottlesFetch]);

    useEffect(() => {
        if (!isBeerBrandsFetch) {
            return undefined;
        }
        (async () => {
            const beerBrands = await api.getBeerBrands();
            setBeerBrands(beerBrands);
        })();
    }, [isBeerBrandsFetch]);

    useEffect(() => {
        if (!open) {
            setBottleForms([]);
            setBeerBrands([]);
        }
    }, [open]);

    return (
        <div className={'mainForm'}>
            <Autocomplete
                id="bottle_forms"
                className={'autocomplete'}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                getOptionSelected={(option, value) => option.name === value.name}
                getOptionLabel={(option) => option.name}
                options={bottleForms}
                loading={isBottlesFetch}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Bottle Forms"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <Fragment>
                                    {isBottlesFetch ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </Fragment>
                            ),
                        }}
                    />
                )}
            />

            <Autocomplete
                className={'autocomplete'}
                multiple
                id="beer_brands"
                options={beerBrands}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Beer brands"
                    placeholder="Beer Brands"
                />
                )}
            />
        </div>
    );
}

export default MainForm;
