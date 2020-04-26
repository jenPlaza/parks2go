// JavaScript Document
import React from 'react';

//Material UI
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';

class States extends React.Component {
	
	linkClick(event) {
	window.onclick= event => {
	 //console.log(event.target);
	 //console.log(event.target.id);
	  var targetId = event.target.id;
	  window.location.assign(`http://localhost:3000/stateActivities/${targetId}`);
	};
};
  render() {
    return(
      <Grid container >
      		<Grid item xs={12}  style={styles.box}>
	  			<Link><li style={styles.li} onClick={this.linkClick} id={'AL'}>Alabama</li></Link>
				<Link><li style={styles.li} onClick={this.linkClick} id={'AK'} >Alaska</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'AZ'} >Arizona</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'AR'} >Arkansas</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'CA'} >California</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'CO'} >Colorado</li></Link>
	 			<Link><li style={styles.li} onClick={this.linkClick} id={'CT'} >Conneticut</li></Link>
     			<Link><li style={styles.li} onClick={this.linkClick} id={'DC'} >District of Columbia</li></Link>
     			<Link><li style={styles.li} onClick={this.linkClick} id={'DE'} >Delaware</li></Link>
     			<Link><li style={styles.li} onClick={this.linkClick} id={'FL'} onClick={this.linkHandler} >Florida</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'GA'}>Georgia</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'HI'}>Hawaii</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'ID'} >Idaho</li></Link>
	  			<Link><li style={styles.li} onClick={this.linkClick} id={'IL'} >Illinois</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'IN'} >Indiana</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'IA'} >Iowa</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'KS'} >Kansas</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'KY'} >Kentucky</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'LA'} >Louisiana</li></Link>
	  			<Link><li style={styles.li} onClick={this.linkClick} id={'ME'} >Maine</li></Link>
				<Link><li style={styles.li} onClick={this.linkClick} id={'MD'} >Maryland</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'MA'} >Massachusetts</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'MI'} >Michigan</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'MN'} >Minnesota</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'MS'} >Mississippi</li></Link>
	  			<Link><li style={styles.li} onClick={this.linkClick} id={'MO'} >Missouri</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'MT'} >Montana</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'NE'} >Nebraska</li></Link>
	  			<Link><li style={styles.li} onClick={this.linkClick} id={'NV'} >Nevada</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'NH'} >New Hampshire</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'NJ'} >New Jersey</li></Link>
	  			<Link><li style={styles.li} onClick={this.linkClick} id={'NM'} >New Mexico</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'NY'} >New York</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'NC'} >North Carolina</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'ND'} >North Dakota</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'OH'} >Ohio</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'OK'} >Oklahoma</li></Link>
	  			<Link><li style={styles.li} onClick={this.linkClick} id={'OR'} >Oregon</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'PA'} >Pennsylvania</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'RI'} >Rhode Island</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'SC'} >South Carolina</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'SD'} >South Dakota</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'TN'} >Tennessee</li></Link>
	  			<Link><li style={styles.li} onClick={this.linkClick} id={'TX'} >Texas</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'UT'} >Utah</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'VT'} >Vermont</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'VA'} >Virginia</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'WA'} >Washington</li></Link>
      			<Link><li style={styles.li} onClick={this.linkClick} id={'WV'} >West Virginia</li></Link>
	  			<Link><li style={styles.li} onClick={this.linkClick} id={'WI'} >Wisconsin</li></Link>
	  			<Link><li style={styles.li} onClick={this.linkClick} id={'WY'} >Wyoming</li></Link>
	  		</Grid>
      	</Grid>
  	);
  }
}

export default States;
const styles ={
	li:{
		color:'grey',
		textDecoration:'none',
		listStyleType:'none',
	},
	box:{
		columns:'4',
		padding:'4%',
	},
}
