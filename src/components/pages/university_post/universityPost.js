import React from 'react';
import axios from '../../../configs/axios';
import TimeLine from './TimeLine'

class UniversityPost extends React.Component {

    constructor(){
	super();
	this.state = {universityPosts:[]}
    }

    fetchData(){
	axios.get(`http://0.0.0.0:8000/api/posts/`).then(response => {
	    this.setState({universityPosts:response.data.results})
	});
    }

    componentDidMount(){
	this.fetchData();
    }
    
render(){
    return(
	<div>
	    <TimeLine postList={this.state.universityPosts} />
	</div>
    )
}


}

export default UniversityPost
