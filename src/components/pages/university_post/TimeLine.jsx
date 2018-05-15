import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton';
import Promise from "bluebird";

import axios from '../../../configs/axios';

class PostCell extends React.Component {

    constructor(postList){
	super();
	this.state = {
	    "tags":[],
	    "emotions":[]
	};
    }

    fetchTags(){
	var aux = [];
	for(var cont =0;cont<this.props.post.tag.length;cont++){
	    axios.get(`http://0.0.0.0:8000/api/tags/` + this.props.post.tag[cont] + '/').then(response => {
		//aux.push(response.data.description);
		this.setState({
		    tags: [...this.state.tags,response.data]
		    
		});
	    });
	}

	return aux;
    }

    fetchEmotions(){
	var aux = [];
	for(var cont =0;cont<this.props.post.emotion.length;cont++){
	    axios.get(`http://0.0.0.0:8000/api/emotions/` + this.props.post.subject + '/').then(response => {
		//aux.push(response.data);
		this.setState({
		    emotions: [...this.state.emotions,response.data]
		});
	    });
	}
	
	return aux;

    }

    getTags(){
	var aux = this.state.tags.map(value=>value);
	return aux;

    }

    componentDidMount(){
	this.fetchTags();
	this.fetchEmotions();
	/*
	Promise.all([this.fetchEmotions(), this.fetchTags()]).then(value =>{
	    this.setState({
		emotions: value[0],
		tags: value[1]
	    });
	});*/

    }

    render (){
	return(
	    <MuiThemeProvider>
	      <Card>
		<CardHeader
		  title={this.props.post.content}
		  subtitle="Usuario Anonimo"
		  actAsExpander={true}
		  showExpandableButton={true}
		  />
		<CardActions>
		  <FlatButton label="Ir para usuario" />
		</CardActions>
		<CardText expandable={true}>
		  Emoções: <ul>{this.state.emotions.map(value => <li>{value.name}</li>)}</ul>
		  Tags: <ul>{this.state.tags.map(value => <li>{value.description}</li>)}</ul>
		</CardText>
	      </Card>
	    </MuiThemeProvider>
	);
    }
    
}

class TimeLine extends React.Component {
    render(){

	return(
	    <div>
	      <ul>{this.props.postList.map(post => <PostCell key={post.id} post={post}></PostCell>)}</ul>
	    </div>
	);
    }
}


export default TimeLine
