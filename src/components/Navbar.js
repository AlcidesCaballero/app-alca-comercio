import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../images/logo.png';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";






const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    marginBottom: "7rem",
    },
    AppBar:{
        backgroundColor: "turquoise",
        boxShadow: "none",
    },
    grow:{
        flexGrow:1,
    },
    Button:{
        marginLeft: theme.spacing(2),
    },
    image:{
        marginRigth:"10px",
        height: "2rem",
    },
    }));

export default function Navbar() {
    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();

        return (
    <div className={classes.root}>
        <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
        <Link to="/">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

        <img src={logo} alt="logo" className={classes.image}/>
        
        </IconButton>
        </Link>

                <div className={classes.grow} />

            <Typography variant="h6" color="textPrimary" component="p">
            
            Hello Guest

            </Typography>
            <div className={classes.Button}>
            <Link to="signin">
            <Button variant="outlined">
                <strong> SIGN IN </strong>
            </Button>
            </Link>
            
            <Link to="CheckoutPage">
            <IconButton aria-label='show cart items' color='inherit'>
                <Badge badgeContent= {basket?.length} color="primary">                
                <ShoppingCart fontSize='large' color='primary'/>
                </Badge>
            </IconButton>
            </Link>

            </div>

        </Toolbar>
        </AppBar>
    </div>
        );
}