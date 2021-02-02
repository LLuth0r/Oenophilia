import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(100),
            height:theme.spacing(100),
        },
    },
}));

export default function WhiteWines(props) {
	const { wines } = props;
	const classes = useStyles();

	return (
		<div className={classes.root}>
            <Paper elevation={8}>
            {wines.filter((wine) => {
                return wine.category === 'White'}).map((wine) => (
                    <div className="wines" key={wine.id}>
                    <p>{wine.vintage}</p>
                    <Link to={`/wine/${wine.id}`}>
						<p className="wine_name">{wine.name}</p>
					</Link>
                    <p className="category">{wine.category}</p>
					<p className="variety">{wine.varietal}</p>  
                    </div>             
            ))}
            </Paper>
        </div>
	);
}
