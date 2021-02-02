import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./CreateWine.css";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function CreateWine(props) {
	const classes = useStyles();
	const [formData, setFormData] = useState({
		vintage: "",
        name: "",
        category: '',
		varietal: "",
		price_min: "",
		price_max: "",
		size: "",
		wine_region: "",
		location: "",
		vineyardName: "",
	});

	const {
		name,
        vintage,
        category,
		varietal,
		price_min,
		price_max,
		size,
		vineyardName,
		wine_region,
		location,
    } = formData;
    
	const { handleCreate } = props;
	const bottle_size = [
		{
			value: "187.5",
			label: "Split",
		},
		{
			value: "375",
			label: "Half",
		},
		{
			value: "500",
			label: "Half-liter",
		},
		{
			value: "750",
			label: "Standard",
		},
		{
			value: "1",
			label: "Liter",
		},
		{
			value: "1.5",
			label: "Magnum",
		},
		{
			value: "3",
			label: "Double Magnum",
		},
		{
			value: "4.5",
			label: "Rehoboam",
		},
		{
			value: "6",
			label: "Methuselah",
		},
	];

	const type = [
		{
			value: "Red",
			label: "Red",
		},
		{
			value: "White",
			label: "White",
		},
		{
			value: "Champagne",
			label: "Champagne",
		},
	];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className="create_page">
			<form
				className={classes.root}
				onSubmit={(e) => {
					e.preventDefault();
					handleCreate(formData);
				}}
			>
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
					{type.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				<TextField
					required
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
					{bottle_size.map((option) => (
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
				<Button type="submit" className="add_wine_button" variant="contained">
					Add Wine
				</Button>
			</form>
		</div>
	);
}
