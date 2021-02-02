import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import './EditWine.css';

export default function EditWine(props) {
    const [formData, setFormData] = useState({
        vintage: '',
        name: '',
        varietal: '',
        price_min: '',
        price_max:'',
        size: '',
        vineyardName: '',
        category: '',
    })

    const { name, vintage, category, varietal, price_min, price_max, size, vineyardName} = formData;
    const { wines, handleUpdate } = props;
    const { id } = useParams();
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

    const type = [
        {
            value: 'Red',
            label: 'Red',
        },
        {
            value: 'White',
            label: 'White',
        },
        {
            value: 'Champagne',
            label: 'Champagne',
        },
    ];

    useEffect(()=> {
        const prefillForm = () => {
            const wineItem = wines.find((wineItem)=> {
                return wineItem.id === Number(id)
            })
            setFormData({
                vintage: wineItem.vintage,
                name: wineItem.name,
                varietal: wineItem.varietal,
                price_max: wineItem.price_max,
                price_min: wineItem.price_min,
                vineyardName: wineItem.vineyard_id,
                size: wineItem.size
            })
        }
        if (wines.length) {
            prefillForm()
        }
    }, [wines])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className='edit_page'>
        <form className='edit_form' onSubmit={(e)=> {
            e.preventDefault();
            handleUpdate(id, formData);
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
          select
          onChange={handleChange}
          name="category"
          value={category}
          className="textfield"
          label="Type"
          variant="outlined"
          >
              {type.map((option)=> (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
          </TextField>
        <TextField
          required
          multiline
          onChange={handleChange}
          name="varietal"
          value={varietal}
          className="textfield"
          label="Variety"
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
        <TextField
          required
          multiline
          onChange={handleChange}
          name="vineyardName"
          value={vineyardName}
          className="textfield"
          label="Vineyard Name"
          variant="outlined"
        />
         <Button type="submit" className="edit_button" variant="contained">
            Edit Wine
        </Button>
        </form>
    </div>
    )
}
