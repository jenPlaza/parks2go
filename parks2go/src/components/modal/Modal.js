// JavaScript Document
import React from 'react';

const modal = (props) => {
    return (
        <div>
            <div style={{transform: props.show ? 'translateY(-40vh)' : 'translateY(-100vh)',}}>
                <div style={styles.modalHeader}>
                    <h3 style={styles.h3}>Send Us An Email</h3>
                    <span style={styles.closeBtn} onClick={props.close}>×</span>
                </div>
                <div style={styles.modalBody}>
                    <p>
                        {props.children}
                    </p>
                </div>
                <div style={styles.modalFooter}>
                    <button style={styles.btnCancel} onClick={props.close}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default modal;

const styles ={
modalHeader:{
    background: '#263238',
    height: '40px',
    padding: '8px 20px',
    textAlign: 'right',
},
h3:{
    color: 'white',
    float: 'left',
    margin: '0',
    padding: '0',
},
modalBody:{
    padding: '10px 15px',
	background: 'white',
     textAlign: 'Center',
},
modalFooter:{
    background: '#263238',
    height: '35px',
    padding: '15px',
},
closeBtn:{
    color: 'white',
    cursor: 'pointer',
    float: 'right',
    fontSize: '30px',
    margin: '0',
},
btnCancel:{
	 background: 'coral',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    outline: 'none',
    padding: '10px',
    backgroundColor: '#b71c1c',
	marginLeft:'-5%',
	marginBottom:'1%',
	position:'absolute',
		bottom:'0px',
},
}
