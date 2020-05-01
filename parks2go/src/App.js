import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import Header from './components/header/header';
import Routes from './components/routes';
import Footer from './components/footer/footer';

//React Router
import{ BrowserRouter as Router }from 'react-router-dom'

//Material UI
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
		marginBottom:'-2px',
		backgroundColor:'#272B2D',
	},
	footerRow:{
		padding:'5%',
		backgroundColor:'#272B2D',
		//backgroundColor:'#222628',
		//backgroundColor:'#313638',
	},
}));

export default function App() {
  const classes = useStyles();
  return (
	  <MuiThemeProvider theme={theme}>
		<Router>
		<div className={classes.root}>
      	<Grid container spacing={0} >
        <Grid item xs={12} className={classes.headerRow}>
          <Header />
	  <hr />
        </Grid>
	  
		<Grid container spacing={1}>
        	<Grid item xs={12}>
          	<Routes />
        	</Grid>
		</Grid>
	  
	  <Grid item xs={12} className={classes.footerRow}>
          <Footer />
        </Grid>
      </Grid>
    </div>
		</Router>
	   </MuiThemeProvider>
		);
	}