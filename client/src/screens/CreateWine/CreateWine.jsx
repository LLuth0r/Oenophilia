import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import './CreateWine.css';
import MenuItem from '@material-ui/core/MenuItem';

export default function CreateWine(props) {
    const [formData, setFormData] = useState({
        vintage: '',
        name: '',
        varietal: '',
        price_min: '',
        price_max:'',
        size: '',
    })

    const { name, vintage, varietal, price_min, price_max, size } = formData;
    const { handleCreate } = props;
    const bottle_size = [
        {
            value: '187.5mL',
            label: 'Split',
        },
        {
            value: '375mL',
            label: 'Half',
        },
        {
            value: '500mL',
            label: 'Half-liter',
        },
        {
            value: '750mL',
            label: 'Standard',
        },
        {
            value: '1L',
            label: 'Liter',
        },
        {
            value: '1.5L',
            label: 'Magnum',
        },
        {
            value: '3L',
            label: 'Double Magnum',
        },
        {
            value: '4.5L',
            label: 'Rehoboam',
        },
        {
            value: '6L',
            label: 'Methuselah',
        },
    ];


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <form className='add_form' onSubmit={(e)=> {
            e.preventDefault();
            handleCreate(formData)
        }}>
        <TextField
          required
          onChange={handleChange}
          name="name"
          value={name}
          className="textfield"
          label="Wine Name"
          variant="outlined"
          type="text"
        />
        <TextField
          required
          onChange={handleChange}
          name="vintage"
          value={vintage}
          className="textfield"
          label="Vintage"
          variant="outlined"
          type="text"
        />
        <TextField
          required
          multiline
          onChange={handleChange}
          name="varietal"
          value={varietal}
          className="textfield"
          label="Varietal"
          rows={4}
          variant="outlined"
        />
        <TextField
          required
          onChange={handleChange}
          name="price_min"
          value={price_min}
          className="textfield"
          label="Min Price"
          variant="outlined"
          type="number"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        <TextField
          required
          onChange={handleChange}
          name="price_max"
          value={price_max}
          className="textfield"
          label="Max Price"
          variant="outlined"
          type="number"
        //   startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        <TextField
          required
          select
          onChange={handleChange}
          name="size"
          value={size}
          className="textfield"
          label="Bottle Size"
          variant="outlined"
          >
            {bottle_size.map((option)=> (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
         <Button type="submit" className="add-product-button" variant="contained">
            Add Wine
        </Button>
        </form>
    )
}
