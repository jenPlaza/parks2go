import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import Header from './components/header/Header';
import Routes from './components/Routes';
import Footer from './components/footer/Footer';

//React Router
import { BrowserRouter as Router } from 'react-router-dom';

//Material UI
import Grid from '@material-ui/core/Grid';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lora',
  },
  palette: {
    primary: {
      light: '#919182',
      main: '#2D2C23',
    },
    secondary: {
      main: '#F09D51',
      light: 'transparent',
      contrastText: '#ffffff',
    },
  },
});

//style
const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    flexGrow: 1,
    overflow: 'hidden',
  },
  headerRow: {
    padding: '1%',
    backgroundColor: '#272B2D',
  },
  footerRow: {
    paddingTop: '3%',
    paddingLeft: '3%',
    paddingBottom: '3%',
    backgroundColor: '#272B2D',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <Grid container spacing={0}>
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
