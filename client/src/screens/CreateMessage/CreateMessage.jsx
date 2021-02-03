import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import './CreateMessage.css';

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function CreateMessage(props) {
	const classes = useStyles();
	const [formData, setFormData] = useState({
		subject: "",
		body: "",
	});

	const {
		subject,
		body,
	} = formData;

    const {handleCreateMessage} = props;
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className="create-message">
			<form
				className={classes.root}
				onSubmit={(e) => {
					e.preventDefault();
					handleCreateMessage(formData);
				}}
			>
				<TextField
					required
					onChange={handleChange}
					name="subject"
					value={subject}
					className="textfield"
					label="Subject"
					variant="outlined"
					type="text"
				/>
				<TextField
                    required
                    multiline
					onChange={handleChange}
					name="body"
					value={body}
					className="textfield"
					label="Message"
					variant="outlined"
					type="text"
				/>
				<Button type="submit" className="add_wine_button" variant="contained">
					Send Message
				</Button>
			</form>
		</div>
	);
}
