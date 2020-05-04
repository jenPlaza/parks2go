// JavaScript Document
import React from 'react';
import States from '../USA_states/states';
import { makeStyles } from '@material-ui/core/styles';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Youtube from '@material-ui/icons/YouTube';

//styles
const useStyles = makeStyles(theme => ({
root:{				
		height:'auto',
		flexGrow: 1,
		overflow:'hidden',
		textAlign:'left',
	},
container:{
		marginTop:'-2%',
		justifyContent:'center',
	},
h2:{
		fontSize:'1.5em',
		textAlign:'left',
		color:theme.palette.secondary.contrastText,
		fontSize:'larger',
	[theme.breakpoints.up('md')]: {
    marginTop: '10%',
	},
	[theme.breakpoints.up('md')]: {
    marginTop: '12%',
	},
	},
a:{
		color:theme.palette.secondary.main,
		textDecoration:'none',
	},
about:{
		paddingRight:'4%',
		marginBottom:'5%',
		color:theme.palette.secondary.contrastText,
	},
states:{
	fontSize:'1.5em',
		textAlign:'left',
		color:theme.palette.secondary.contrastText,
		//fontSize:'larger',
		marginTop:'-1%',
		marginBottom:'15%',
	[theme.breakpoints.up('md')]: {
    	marginTop: '3%',
		marginBottom:'11.5%',
		marginLeft:'1%',
	},
	},
connect:{
	fontSize:'1.5em',
	textAlign:'left',
	color:theme.palette.secondary.contrastText,
	//fontSize:'larger',
	marginTop:'5%',
	[theme.breakpoints.up('md')]: {
    marginTop: '30%',
	marginLeft:'-10%',
	},
	},
	div:{
		//border:"1px solid red",
		width:'60%',
		justifyContent:'space-around',
		marginLeft:'25%',
		//border:'1px solid red'
	},
socialMedia:{
	display:'inline-block',
	transform: 'scale(1.5)',
	marginTop:'10%',
	marginLeft:'12%',
	paddingRight:'1%',
	color:theme.palette.secondary.contrastText,
	[theme.breakpoints.up('md')]: {
		display:'block',
    	marginTop: '50%',
		transform: 'scale(1.5)',
	},
	[theme.breakpoints.up('lg')]: {
		display:'block',
    	marginTop: '40%',
	},
	},
copyright:{
	color:theme.palette.secondary.main,
	marginTop:'15%',
	[theme.breakpoints.up('md')]: {
    	marginTop: '5%',	
	},
	},
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
					<p><Link className={classes.a} href='/about'>Parks2Go</Link> is a free interactive guide to National State Parks around the country, created by Jen Plaza. Parks2Go originally began as a React student assignment...</p>
        </Grid>
	  
        <Grid item xs={12} md={8}>
			<h2 className={classes.states}>Parks2Go</h2>
	  		<States style={{fontSize:'smaller'}}/>
	  	</Grid>

      <Grid item xs={12} md={1} className={classes.connect2}>
	  <h2 className={classes.connect}>Connect</h2>
	  <div className={classes.div}>
	  <Link color="inherit" href="https://github.com/jenPlaza" target='_blank'><GitHub className={classes.socialMedia}/></Link>
	  <Link color="inherit" href="https://www.linkedin.com/in/jennifer-plaza-7a516a24/" target='_blank'><LinkedIn className={classes.socialMedia}/></Link>
	  <Link color="inherit" href="https://www.youtube.com/channel/UCcdNksuPEwQ62VRNDxtwbzQ" target='_blank'><Youtube className={classes.socialMedia} /></Link>
	  </div>
      </Grid>
	    
		<Grid item xs={12} md={12}><Copyright /></Grid>
      </Grid>
    </div>
  );
}
