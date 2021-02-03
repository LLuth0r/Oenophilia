import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCards from "../../components/ProductCards/ProductCards";

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
		height: 250,
	},
});

export default function RedWines(props) {
	const { wines } = props;
	const classes = useStyles();

	return (
		<div className={classes.wines}>
			<ProductCards
				wines={wines.filter((wine) => {
					return wine.category === "Red";
				})}
			/>
		</div>
	);
}
