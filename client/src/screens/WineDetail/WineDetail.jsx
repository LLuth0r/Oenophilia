import { useEffect, useState } from "react";
import { getOneWine } from "../../services/wines";
import { useParams } from "react-router-dom";
import "./WineDetail.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		"& > *": {
			margin: theme.spacing(5),
			width: theme.spacing(75),
			height: theme.spacing(50),
		},
	},
}));

export default function WineDetail(props) {
	const [wineItem, setWineItem] = useState(null);
	const { id } = useParams();
	const classes = useStyles();

	useEffect(() => {
		const fetchWineItem = async () => {
			const wineData = await getOneWine(id);
			setWineItem(wineData);
		};
		fetchWineItem();
	}, [id]);

	return (
		<div className={classes.root}>
			<Paper elevation={8}>
				<div className="wine_details">
					<h3>Brand: {wineItem?.name}</h3>
					<h4>Vintage: {wineItem?.vintage}</h4>
					<h4>Category: {wineItem?.category}</h4>
					<h4>Variety: {wineItem?.varietal}</h4>
					<h4>{wineItem?.size}mL</h4>
					<h6>
						Min. Price ${wineItem?.price_min} / Max. Price $
						{wineItem?.price_max}
					</h6>
				</div>
			</Paper>
		</div>
	);
}
