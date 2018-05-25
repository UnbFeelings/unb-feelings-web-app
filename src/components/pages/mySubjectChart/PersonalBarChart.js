import React from 'react';
import {Bar} from "react-chartjs-2";

class PersonalBarChart extends React.Component {

    constructor(){
	super();
	this.state = {
	    "data":{
		labels:[],
		datasets: []
	    }}
    }

    componentWillReceiveProps(nextProps){
	let map = new Map();
	
	for(var cont = 0; cont < nextProps.labels.length; cont = cont + 1){
	    map.set(nextProps.labels[cont].id,{name:nextProps.labels[cont].name,g:0, b:0})
	}
	
	for(var cont = 0; cont < nextProps.posts.length; cont = cont + 1){
	    let aux = map.get(nextProps.posts[cont].subject);
	    if(aux !== undefined){
		if(nextProps.posts[cont].emotion === "g"){
		    aux.g++;
		}
		else if(nextProps.posts[cont].emotion === "b"){
		    aux.b++;
		}
	    }
	}


	let tmp = {
	    labels:[],
	    datasets:[{
		label: 'Bom',
		backgroundColor: '#228b22',
		borderColor: '#1b6f1b',
		borderWidth: 1,
		data: []
	    }, {
		label: 'Ruim',
		backgroundColor: '#6a7eff',
		borderColor: '#0d2a51',
		borderWidth: 1,
		data: []
	    }
		     ]
	}
	
	for(let [key,value] of map){
	    tmp.labels.push(value.name)
	    tmp.datasets[0].data.push(value.g);
	    tmp.datasets[1].data.push(-1*value.b);
	}

	this.setState({data:tmp})
	
    }

    formatData(){


    }

    render(){
	return(
		<div>
		{console.log(this.state.data)}
		<Bar data={this.state.data} options={{}}/>
		</div>
	);
    }
}

export default PersonalBarChart; 
