// JavaScript Document
import React from 'react'
import Button from '@material-ui/core/Button';

//color theme
import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
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

//Dummy Component
const MyBtn = props =>{
	return(
		 <Button type='submit' style={styles.btn}>{props.btnText}</Button>
	)
}
export default MyBtn

const styles ={
	btn:{
		padding:'1%',
		backgroundColor:'white',
		margin:'1%',
		fontSize:'1em',
		fontWeight:'bold',
		color:theme.palette.secondary.main,
		border:'3px solid #ea7a0f',
	}
}
