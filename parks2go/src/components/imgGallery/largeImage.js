// JavaScript Document
import React, {Component} from 'react';

const LargeImage = ({lgImage}) => {
		return(
			<div> 
			<img src={lgImage.url} style={{width: '100%', borderRadius: 30}}/>
			</div>
		)
	}

export default LargeImage