import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CustomForm from './CustomForm';
import api from '../api';

const inputTypes = {
    "Банка": [
        {key: 'need_more', name: 'Мало, еще литруху надо'},
        {key: 'unconvinient', name: 'С банки сербать неудобно'},
    ],
    "Стекло": [
        {key: 'want_crisps', name: 'Чипсу хочу'},
        {key: 'need_goblet', name: 'Бокал бы надо'},
    ],
    "Литруха": [
        {key: 'with_fish', name: 'Под рыбку'},
        {key: 'want_crisps', name: 'Мона и с чипсами'},
    ],
    "Двушка": [
        {key: 'want_shrimps', name: 'Креветулек хотса'},
        {key: 'walking_dead', name: 'Exclusive. Полирнуть by 40\&#176;'},
    ],
}

function MainForm() {
    const [bottleFormsSuggestions, setBottleFormsSuggestions] = useState([]);
    const [bottleFormValue, setBottleFormValues] = useState(null);
    const [bottleInputValue, setBottleInput] = useState('');

    const [beerBrandsSuggestions, setBeerBrandsSuggestions] = useState([]);
    const [beerBrandsValues, setBeerBrandsValues] = useState([]);
    const [beerInputValue, setBeerInput] = useState('');
    const buttonDisabled = !(Boolean(bottleFormValue) && Boolean(beerBrandsValues.length))

    useEffect(() => {      
        if(!bottleInputValue) {
            return undefined;
        }  
        (async () => {
            const bottleForms = await api.getBottleForms({
                params: {
                    search: bottleInputValue,
                }
            });
            setBottleFormsSuggestions(bottleForms);
        })();
    }, [bottleInputValue]);

    useEffect(() => {
        if(!beerInputValue) {
            return undefined;
        } 
        (async () => {
            const beerBrands = await api.getBeerBrands(
                {
                    params: {
                        search: beerInputValue,
                    }
                }
            );
            setBeerBrandsSuggestions(beerBrands);
        })();
    }, [beerInputValue]);

    const onBottleInputChange = (event) => {
        setBottleInput(event.target.value); 
    }

    const onBeerInputChange = (event) => {
        setBeerInput(event.target.value); 
    }

    const onBottleAutocompleteChange = (event, value) => {
        setBottleFormValues(value);
    }

    const onBeerAutocompleteChange = (event, value) => {
        setBeerBrandsValues(value);
    }

    return (
        <div className={'mainForm'}>
            <Autocomplete
                id="bottle_forms"
                className={'autocomplete'}
                getOptionSelected={(option, value) => option.name === value.name}
                getOptionLabel={(option) => option.name}
                options={bottleFormsSuggestions}
                onChange={onBottleAutocompleteChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Bottle Forms"
                        variant="outlined"
                        onChange={onBottleInputChange}
                        value={bottleInputValue}
                    />
                )}
            />

            <Autocomplete
                className={'autocomplete'}
                multiple
                id="beer_brands"
                options={beerBrandsSuggestions}
                getOptionLabel={(option) => option.name}
                onChange={onBeerAutocompleteChange}
                renderInput={(params) => (
                <TextField
                    {...params}
                    value={beerInputValue}
                    onChange={onBeerInputChange}
                    variant="outlined"
                    label="Beer brands"
                    placeholder="Beer Brands"
                />
                )}
            />
            <CustomForm />
            <Button
                variant={'contained'}
                color={'primary'}
                onClick={() => console.log('click')}
                disabled={buttonDisabled}
            >
                Send
            </Button>
        </div>
    );
}

export default MainForm;
