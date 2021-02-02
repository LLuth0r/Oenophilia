import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './ProductCard.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
    },
    bullet: {
      margin: '10px 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    card: {
        height: 250,
    }
  });

export default function ProductCard(props) {
    const classes = useStyles();
    

    return (
      <Card className={classes.card}>
          <CardContent>
              <h4>{props.vintage}</h4>
              <p>{props.wineName}</p>
              <p>{props.category}</p>
              <p>{props.variety}</p>
              <p>Min. Price ${props.price_min} / Max Price ${props.price_max}</p>
              <p>{props.vineyard.vineyard_name}</p>
          </CardContent>
      </Card>
    )
}
