import React from "react";
import "./Wines.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProductCards from '../../components/ProductCards/ProductCards';

const useStyles = makeStyles((theme) => ({
    wines: {
		width: '100%',
    },
}));

export default function Wines(props) {
    const {wines} = props;
    
    const classes = useStyles();
    
	return (
		<div className={classes.wines}>
            
			<ProductCards wines={wines}/>
            
		</div>
	);
}
