import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import './ProductCard.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles({
	root: {
		maxWidth: 1200,
	},
	bullet: {
		margin: "10px 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	card: {
		height: 275,
		width: 300,
	},
});

export default function ProductCard(props) {
	const classes = useStyles();
	console.log(props)

	return (
		<Card className={classes.card}>
			<CardContent>
				<h4 className='product-card'>{props.vintage}</h4>
				<p className='product-card'>{props.wineName}</p>
				<p className='product-card'>{props.category}</p>
				<p className='product-card'>{props.variety}</p>
				<p className='product-card'>
					Min. Price ${props.price_min} / Max Price ${props.price_max}
				</p>
				<p className='product-card'>{props.vineyard.vineyard_name}</p>
				<MailOutlineIcon />
			</CardContent>
		</Card>
	);
}
