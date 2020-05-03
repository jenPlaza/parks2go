import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
   position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 1), 
  },
	openModalBtn:{
		 color:theme.palette.primary.light,
		fontSize:'1.5rem',
    marginTop: '10%',
    padding: '2%',
    fontWeight: 'bold',
	[theme.breakpoints.up('md')]: {
    		marginLeft:'-85%',
	},
},
	modalHeader:{
    background: '#272B2D',
	width:'100%',
    height: '40px',
    padding: '8px 20px',
    textAlign: 'left',
	color:'white',
		marginTop:'55%',
},

modalBody:{
    padding: '5%',
	backgroundColor: 'white',
	width:'100%',
},
modalFooter:{
    background: '#272B2D',
    height: '35px',
    padding: '15px',
	color:'white',
},
inputField:{
	boxShadow: theme.shadows[1],
	width:'90%',
	
},
	btnSubmit:{
    background: 'coral',
    border: 'none',
    color: theme.palette.secondary.contrastText,
    cursor: 'pointer',
    fontWeight: 'bold',
    outline: 'none',
    padding: '10px',
	backgroundColor: '#1b5e20',
		float:'right',
},
btnCancel:{
	 background: 'coral',
    border: 'none',
    color: theme.palette.secondary.contrastText,
    fontWeight: 'bold',
    outline: 'none',
    padding: '10px',
    backgroundColor: '#b71c1c',
},
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className={classes.openModalBtn} type="button" onClick={handleOpen}>
        Send Us An Email
      </button>
      <Modal className={classes.modal} 
        open={open}
        onClose={handleClose}
        aria-labelledby="Send Us An Email"
        //aria-describedby="simple-modal-description"
      >
         <form action="/">
	  			<Grid container>
	  					<Grid item xs={12}>
	  				<div className={classes.modalHeader}>
                    	<h3 className={classes.h3}>Send Us An Email</h3>
                	</div>
	  					
	  				<div className={classes.modalBody}>
							
	  					<input className={classes.inputField} type="text" id="fname" name="fname" placeholder="Full Name"></input>
	  					<br /><br />
 							
	  						<input className={classes.inputField} type="text" id="email" name="email" placeholder="Email"></input>
	  					<br /><br />
	  										
	  						<input className={classes.inputField} type="text" id="message" name="message" placeholder="Message"></input>
	  					<br /><br />	
	  				</div>
	  				<div className={classes.modalFooter}>
                    		<button className={classes.btnCancel} onClick={handleClose}>Cancel</button>
	  
	  						<button className={classes.btnSubmit} onClick={handleOpen}>Submit</button>
	  				</div>
	  				</Grid>						
	  			</Grid>
	  		</form>
      </Modal>
	  <Modal>
	  <button className={classes.btnSubmit} onClick={handleOpen}>Submit</button>
	  </Modal>
    </div>
  );
}
