import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";

export default function FormDialog(props) {
	const [open, setOpen] = useState(false);
	const { currentUser, wines } = props;

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Add Wine
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Add New Wine</DialogTitle>
				<DialogContent>
					<DialogContentText>Add a wine bitch...</DialogContentText>
					<form
						className="modal_form"
						onSubmit={(e) => {
							e.preventDefault();
							handleCreate(formData);
						}}
					>
						<TextField
							autofocus
							margin="dense"
							required
							multiline
							onChange={handleChange}
							name="vineyardName"
							value={vineyardName}
							className="textfield"
							label="Vineyard Name"
						/>
						<TextField
							autofocus
							margin="dense"
							required
							onChange={handleChange}
							name="name"
							value={name}
							className="textfield"
							label="Wine Name"
							type="text"
						/>
						<TextField
							autofocus
							margin="dense"
							required
							onChange={handleChange}
							name="vintage"
							value={vintage}
							className="textfield"
							label="Vintage"
							type="text"
						/>
						<TextField
							autofocus
							margin="dense"
							required
							select
							onChange={handleChange}
							name="category"
							value={category}
							className="textfield"
							label="Type"
						>
							{type.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<TextField
							autofocus
							margin="dense"
							required
							onChange={handleChange}
							name="varietal"
							value={varietal}
							className="textfield"
							label="Variety"
						/>
						<TextField
							autofocus
							margin="dense"
							required
							onChange={handleChange}
							name="price_min"
							value={price_min}
							className="textfield"
							label="Min Price"
							type="number"
						/>
						<TextField
							autofocus
							margin="dense"
							required
							onChange={handleChange}
							name="price_max"
							value={price_max}
							className="textfield"
							label="Max Price"
							type="number"
						/>
						<TextField
							autofocus
							margin="dense"
							required
							select
							onChange={handleChange}
							name="size"
							value={size}
							className="textfield"
							label="Bottle Size"
						>
							{bottle_size.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<Button type="submit" color="primary">
							Submit
						</Button>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>{" "}
			*/}
		</div>
	);
}
