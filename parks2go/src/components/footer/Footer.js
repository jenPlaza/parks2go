// JavaScript Document
import React from 'react';
import States from '../USA_states/states';
import { makeStyles } from '@material-ui/core/styles';

//images
//import logo2 from '../../images/ptBtn3.png';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Youtube from '@material-ui/icons/YouTube';

//styles
const useStyles = makeStyles(theme => ({
  root:{				
		height:'auto',
		flexGrow: 1,
		overflow:'hidden',
		textAlign:'left',
	},
	h2:{
		fontSize:'1.25em',
		textAlign:'center',
		marginTop:'-0.5%',
		color:'white',
	},
	
	a:{
		color:theme.palette.secondary.main,
		textDecoration:'none',
	},
	'a:visited':{
		color:'grey',
	},
	states:{
	fontSize:'1.25em',
		textAlign:'center',
		marginTop:'-0.5%',
		marginBottom:'1%',
		margin:'1%',
		color:'white',
	marginLeft:'-14%',
	},
	copyright:{
		color:theme.palette.secondary.main,
		marginTop:'-4%',
	},
	container:{
		marginTop:'-2%',
		justifyContent:'center',
	},
	about:{
		paddingRight:'4%',
		color:'white',
	},
	display:{
		display:'block',
		paddingLeft:'35%',
	color:'white',
	}
}));

const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography variant="body2" align="left" className={classes.copyright}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Parks2Go
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//exporting a class footer
export default function Footer() {
  const classes = useStyles();
	
  return(
    <div className={classes.root}>
      <Grid container>

	  <Grid item xs={12} md={3} className={classes.about}>
		<h2 className={classes.h2}>About Us</h2>
					<p><a className={classes.a} href='http://localhost:3000/About'>Parks2Go</a> ipsum dolor sit amet. The hotel, the casino. The Corleone Family wants to buy you out. I don’t like violence, Tom. I’m a businessman; blood is a big expense.</p>
        </Grid>
	  
        <Grid item xs={12} md={8}>
			<h2 className={classes.states}>Parks2Go</h2>
	  		<States />
	  	</Grid>

      <Grid item xs={12} md={1}>
	  <h2 className={classes.h2}>Connect</h2>
	  <Facebook className={classes.display}/>
	  <Instagram className={classes.display}/>
	  <Twitter className={classes.display}/>
	  <Youtube className={classes.display} />
      </Grid>
	    
		<Grid item xs={12} md={12}><Copyright /></Grid>
      </Grid>
    </div>
  );
}
