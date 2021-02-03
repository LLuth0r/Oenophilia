import React from "react";
import "./Wines.css";
import { makeStyles } from "@material-ui/core/styles";
import ProductCards from "../../components/ProductCards/ProductCards";

const useStyles = makeStyles((theme) => ({
	wines: {
		width: "100%",
	},
}));

export default function Wines(props) {
	const { wines } = props;

	const classes = useStyles();

	return (
		<div className='wine_page'>
			<ProductCards wines={wines} />
		</div>
	);
}
