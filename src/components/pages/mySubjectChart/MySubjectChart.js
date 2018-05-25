import React from 'react';
import store from '../../../redux/store';
import axios from '../../../configs/axios';
import {Bar} from "react-chartjs-2";
import PersonalBarChart from "./PersonalBarChart";

class MySubjectChart extends React.Component {

    constructor(){
	super();
	this.state = {"posts":[],
		     "subjects":[]}
    } 
    
    fetchPosts(id){
	axios.get('http://0.0.0.0:8000/api/posts/user/' + id + '/').then((response) => {
	    this.setState({ posts: response.data.results });
	    for(var cont = 0; cont<this.state.posts.length;cont = cont + 1){
		this.fetchSubjects(this.state.posts[cont].subject)
	    }   
	});
    }

    fetchSubjects(id){
	axios.get('http://0.0.0.0:8000/api/subjects/' + id + '/').then((response) => {
	    if(!this.state.subjects.includes(response.data.name)){
		this.setState(
		    {
		    subjects: [...this.state.subjects,response.data]
		    }
		);
	    }
	});
    }

    formatData(){
	this.fetchPosts(store.getState().user.data.id);
    }

    
    componentDidMount(){
	this.formatData()
    }
    
    render(){
	return(
	    <div>
		<PersonalBarChart labels={this.state.subjects} posts={this.state.posts}/>
	    </div>
	);
    }
}

export default MySubjectChart; 
