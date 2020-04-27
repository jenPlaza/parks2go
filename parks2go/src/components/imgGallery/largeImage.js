// JavaScript Document
import React from 'react';

const LargeImage = ({lgImage}) => {
		return(
			<div> 
			<img src={lgImage.url} alt="park" style={{width: '100%', borderRadius: 30}}/>
			<p>{lgImage.title}</p>
			</div>
		)
	}

export default LargeImage