import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import Header from './components/header/Header';
import SideBarLeft from './components/sidebarleft/SideBarLeft';
import Routes from './components/Routes';
import Footer from './components/footer/Footer';

//React Router
import{ BrowserRouter as Router }from 'react-router-dom'

//Material UI
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lora',
  },
	palette: {
    primary: {
      light: '#B9B9B9',
      main: '#000000',
    },
    secondary: {
      main: '#ea7a0f',
	  light:"transparent",
      contrastText: '#ffffff',
    },
  },
});

//style
const useStyles = makeStyles(theme => ({
  root: {					
		height:'auto',
		flexGrow: 1,
		overflow:'hidden',
  },
	headerRow:{
		padding:'1%',
		backgroundColor:'white',
	},
	paper:{
		backgroundColor: "transparent",
		border:'none',
	},
	paperRight:{
		backgroundColor: "transparent",
		border:'none',
		marginTop:'6%',
	},
	footerRow:{
		marginTop:'1%',
		padding:'2%',
		backgroundColor:'#313638',
	},
}));

export default function App() {
  const classes = useStyles();
  return (
	  <MuiThemeProvider theme={theme}>
		<Router>
		<div className={classes.root} style={styles.container}>
      	<Grid container spacing={0} >
        <Grid item xs={12} className={classes.headerRow}>
          <Paper className={classes.paper} variant="outlined"><Header /></Paper>
        </Grid>
	  
		<Grid container spacing={1}>
         <Grid item xs={12} md={6}>
        <Paper className={classes.paper} variant="outlined"><SideBarLeft /></Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper} variant="outlined"><Routes /></Paper>
        </Grid>
		</Grid>
	  
	  <Grid item xs={12} className={classes.footerRow} style={styles.footer}>
          <Paper className={classes.paper} variant="outlined"><Footer /></Paper>
        </Grid>
      </Grid>
    </div>
		</Router>
	   </MuiThemeProvider>
		);
	}
const styles ={
	footer:{
		border: '1px solid red',						
	}
}