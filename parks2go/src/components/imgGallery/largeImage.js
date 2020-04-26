// JavaScript Document
import React from 'react';

const LargeImage = ({lgImage}) => {
		return(
			<div> 
			<img src={lgImage.url} alt="park" style={{width: '100%', borderRadius: 30}}/>
			</div>
		)
	}

export default LargeImage