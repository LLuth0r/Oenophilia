import React from "react";
import { Link } from "react-router-dom";

export default function WhiteWines(props) {
	const { wines } = props;

	return (
		<div className="white_wines">
			{wines
				.filter((wine) => {
					return wine.category === "White";
				})
				.map((wine) => (
					<Link className="card" to={`/wine/reds`}>
						<div>{wine.name}</div>
					</Link>
				))}
		</div>
	);
}
