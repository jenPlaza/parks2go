// JavaScript Document
import React from 'react';
import ImageGallery from 'react-image-gallery';
import Grid from "@material-ui/core/Grid";

const id ='bepa';
const endpoint = `parkCode=${id}`;

//Smart Component
class ImgGallery extends React.Component {
	//declaring state and new object
	state ={
		imgListing: [],
	}

//calling fetchData function
	componentDidMount(){
	this.fetchData();
}

//fetch Api data and map json results in a list format
fetchData(){
	const urlArray=[];
	const apiImages = [];
	
 fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
		.then(results =>{
		return results.json();
	}
	).then(data =>{
	 
let mList = data.data.map((use, i)=>{
	console.log(use,i);
	return(
		<div key={i}>
			  <Grid container>
	  					<Grid item xs={12} md={5} style={styles.imgs}>
		{use.images.map(p => {
		console.log(p);
		let url = p.url;
		let urlString = url.toString();
	
		var remove = urlString.split("https://www.nps.gov/common/uploads/structured_data/");

			urlArray.push(remove);
	
	console.log("urlArray: "+urlArray.length);
	
		var url2 = urlArray.toString();
		var id = url2.split(",");
	
		console.log("id: "+id.length);
	var i = 0;
	
	for( ; i < id.length; i++)
	{ if ( id[i] === "") { id.splice(i, 1); }}
	
	for( ; i < id.length; i++)
		{console.log("id[i]: "+id[i]);}
	
	for( ; i < id.length; i++)
		{
	 apiImages.push({
    original: `https://www.nps.gov/common/uploads/structured_data/${id[i]}?w=500&h=300`,
    thumbnail: `https://www.nps.gov/common/uploads/structured_data/${id[i]}?w=150&h=50`,
  })
	}	
 		return (	
		
		<ImageGallery key={i} items={apiImages}/>
			)})}
		 </Grid>
		    </Grid>
		   </div>
			)
		})
		this.setState({ImgGallery:mList});
	})
}
	 render() { 
  return (
	  <div >
	  {this.state.ImgGallery}
		</div>			
  	);
  }
}

export default ImgGallery

const styles ={
	container:{

	},
	imgs:{
		border:'1px solid red',
		height:'auto',
	}
}
	