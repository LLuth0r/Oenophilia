import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Wines.css";

//Dialog imports from material-ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";

export default function Wines(props) {
	const { wines, currentUser } = props;
    const [open, setOpen] = useState(false);
    
 	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="wine_page">
			<div className="wines_table_header">
				<h4>Vintage</h4>
				<h4>Name</h4>
				<h4>Category</h4>
				<h4>Variety</h4>
			</div>
			{wines.map((wine) => (
				<div className="wines" key={wine.id}>
					<p className="vintage">{wine.vintage}</p>
					<NavLink to={`/wine/${wine.id}`}>
						<p className="wine_name">{wine.name}</p>
					</NavLink>
					<p className="category">{wine.category}</p>
					<p className="variety">{wine.varietal}</p>					
				</div>
			))}
		</div>
	);
}
