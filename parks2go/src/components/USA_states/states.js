// JavaScript Document
import React from 'react';

//Material UI
import {makeStyles} from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
ul:{
	margin:'0',
	padding:'0',
	},
li:{
	listStyleType:'none',
	},
link:{
	color:theme.palette.primary.light,
	textDecoration:'none',
	},
box:{
	columns:'3',
	marginTop:'-10%',
	padding:'1%',
	paddingBottom:'5%',
	marginBottom:'-6%',
	[theme.breakpoints.up('md')]: {
	    columns: '4 auto',
	},
	[theme.breakpoints.up('lg')]: {
    	columns: '5 auto',
	},
	},
}));

export default function Map() {
	  const classes = useStyles();

	const stateArray = [
				{ id:'AL', name: 'Alabama'},
				{ id:'AK', name: 'Alaska'},
      			{ id:'AZ', name: 'Arizona'},
      			{ id:'AR', name: 'Arkansas'},
      			{ id:'CA', name: 'California'},
      			{ id:'CO', name: 'Colorado'},
	 			{ id:'CT', name: 'Conneticut'},
     			{ id:'DC', name: 'District of Columbia'},
     			{ id:'DE', name: 'Delaware'},
     			{ id:'FL', name: 'Florida'},
      			{ id:'GA', name: 'Georgia'},
      			{ id:'HI', name: 'Hawaii'},
      			{ id:'ID', name: 'Idaho'},
	  			{ id:'IL', name: 'Illinois'},
      			{ id:'IN', name: 'Indiana'},
      			{ id:'IA', name: 'Iowa'},
      			{ id:'KS', name: 'Kansas'},
      			{ id:'KY', name: 'Kentucky'},
      			{ id:'LA', name: 'Louisiana'},
	  			{ id:'ME', name: 'Maine'},
				{ id:'MD', name: 'Maryland'},
      			{ id:'MA', name: 'Massachusetts'},
      			{ id:'MI', name: 'Michigan'},
      			{ id:'MN', name: 'Minnesota'},
      			{ id:'MS', name: 'Mississippi'},
	  			{ id:'MO', name: 'Missouri'},
      			{ id:'MT', name: 'Montana'},
      			{ id:'NE', name: 'Nebraska'},
	  			{ id:'NV', name: 'Nevada'},
      			{ id:'NH', name: 'New Hampshire'},
      			{ id:'NJ', name: 'New Jersey'},
	  			{ id:'NM', name: 'New Mexico'},
      			{ id:'NY', name: 'New York'},
      			{ id:'NC', name: 'North Carolina'},
      			{ id:'ND', name: 'North Dakota'},
      			{ id:'OH', name: 'Ohio'},
      			{ id:'OK', name: 'Oklahoma'},
	  			{ id:'OR', name: 'Oregon'},
      			{ id:'PA', name: 'Pennsylvania'},
      			{ id:'RI', name: 'Rhode Island'},
      			{ id:'SC', name: 'South Carolina'},
      			{ id:'SD', name: 'South Dakota'},
      			{ id:'TN', name: 'Tennessee'},
	  			{ id:'TX', name: 'Texas'},
      			{ id:'UT', name: 'Utah'},
      			{ id:'VT', name: 'Vermont'},
      			{ id:'VA', name: 'Virginia'},
      			{ id:'WA', name: 'Washington'},
      			{ id:'WV', name: 'West Virginia'},
	  			{ id:'WI', name: 'Wisconsin'},
	  			{ id:'WY', name: 'Wyoming'}
	]
	
    return(
	    <Grid container >
      		<Grid item xs={12}  className={classes.box}>
				<ul className={classes.ul}>
					{stateArray.map((e,i)=>{
						return(<li key={i} className={classes.li} > <Link className={classes.link} href={"/stateActivities/"+e.id}>{e.name}</Link></li>)
							})}
				</ul>
	  		</Grid>
      	</Grid>
  	);
}
