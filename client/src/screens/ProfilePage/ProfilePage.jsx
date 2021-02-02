import React, { useState } from "react";
import "./ProfilePage.css";
import { NavLink } from "react-router-dom";
// import { Button } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";

export default function ProfilePage(props) {
	const [open, setOpen] = useState(false);
	const { currentUser, wines, messages, handleDelete, handleCreate } = props;

	const [formData, setFormData] = useState({
		vintage: "",
		name: "",
		category: "",
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

	const bottle_size = [
		{
			value: "187.5mL",
			label: "Split",
		},
		{
			value: "375mL",
			label: "Half",
		},
		{
			value: "500mL",
			label: "Half-liter",
		},
		{
			value: "750mL",
			label: "Standard",
		},
		{
			value: "1L",
			label: "Liter",
		},
		{
			value: "1.5L",
			label: "Magnum",
		},
		{
			value: "3L",
			label: "Double Magnum",
		},
		{
			value: "4.5L",
			label: "Rehoboam",
		},
		{
			value: "6L",
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

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
    };
    

	return (
		<div className="profile_page">
			<div className="user_details">
				<h3 className="account_details">User Account Details</h3>
				<img src={currentUser.profile_picture} alt="" className="profile_pic" />
				<div className="profile_info">
					<h5>Username: {currentUser.username}</h5>
					<h5>Email: {currentUser.email}</h5>
					<h5>Location: {currentUser.location}</h5>
				</div>
			</div>
			<div className="user_wine_list">
				<div className="wine_list_header">
					<h5 className="wine_list_title">Wine List</h5>
					{/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
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
					</Dialog> */}
					<Button
                        className='add_wine_button'
                        variant='contained'
                        color='primary'
                        href='/wines/add'
                    >Add Wine
                    </Button>
				</div>

				{wines
					.filter((wine) => {
						return currentUser.id === wine.user_id;
					})
					.map((wine) => (
						<div className="user_wines">
							<DeleteIcon
								className="delete_icon"
								onClick={() => handleDelete(wine.id)}
							/>
							<NavLink to={`/wine/${wine.id}/edit`}>
								<UpdateIcon className="update_icon" />
							</NavLink>
							<NavLink to={`/wine/${wine.id}`}>
								<p className="wine" key={wine.id}>
									{wine.vintage} {wine.name}
								</p>
							</NavLink>
						</div>
					))}
			</div>
			<div className="user_message_list">
				<h5 className="message_title">Messages</h5>
				<div className="message_header">
					<div className="message_timestamp">Date</div>
					<div className="message_sender">Sender</div>
					<div className="message_subject">Subject</div>
				</div>
				{messages
					.filter((message) => {
						return currentUser.id === message.user_id;
					})
					.map((message) => (
						<div className="user_messages">
							<DeleteIcon
								className="delete_icon"
								onClick={() => handleDelete(message.id)}
							/>
							<p className="date" key={message.id}>
								{message.created_at}
							</p>
							<p className="sender" key={message.id}>
								{message.user}
							</p>
							<p className="message" key={message.id}>
								{message.subject}
							</p>
						</div>
					))}
			</div>
		</div>
	);
}
