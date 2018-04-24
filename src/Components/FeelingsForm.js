import React from 'react';
import '../App.css';
import { WithContext as ReactTags } from 'react-tag-input';
import { Button, ButtonToolbar, FormGroup, FormControl, HelpBlock, ControlLabel,
														Row, Grid, Col} from 'react-bootstrap';


class FeelingsForm extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
          tags: [],
          value: '',
					isSended: false,
					id: this.props.id
      };
      this.handleDelete = this.handleDelete.bind(this);
      this.handleAddition = this.handleAddition.bind(this);
      this.handleDrag = this.handleDrag.bind(this);
      this.handleChange = this.handleChange.bind(this);
  		this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDelete(i) {
      const { tags } = this.state;
      this.setState({
       tags: tags.filter((tag, index) => index !== i),
      });
    }

    handleAddition(tag) {
      const { tags } = this.state;
      this.setState({tags: [...tags, ...[tag]] });
    }

    handleDrag(tag, currPos, newPos) {
      const tags = [...this.state.tags];
      const newTags = tags.slice();

      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);

      // re-render
      this.setState({ tags: newTags });
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    async handleSubmit(event) {
			const response = await fetch('http://localhost:8000/api/posts/', {
	      method: 'POST',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type':'application/json'
	      },
	      body: JSON.stringify({
				  author: this.state.id,
				  content: this.state.value,
				  subject: "2",
				  tag: [
				    "1"
				  ],
				  emotion: [
				    "1"
				  ]
	      })
	    })

			this.setState({
				isSended: !this.state.isSended
			})

	    const responseJson = await response.json()
	    console.log(responseJson)
    }

    validate (tag) {
      const matches = /^(\d+)-(\d+)$/.exec(tag)
      if (!matches || matches.length !== 3) {
        return false
      }

       const min = parseInt(matches[1], 10)
       const max = parseInt(matches[2], 10)
       if (min > max) {
         return false
       }

      return true
    }

    render() {
        const { tags } = this.state;
        return (
        	<Grid>
        		<Row className="show-grid">
    					<Col xs={8}>
    					</Col>

    					<Col xs={8}>
        				<div>
        					<h1>FeelingsPage</h1>

				        	<form>
				    	      <FormGroup>
				    	      	<ControlLabel>Descreva o que está sentindo a cerda de uma aula ou do seu dia:</ControlLabel>
				    	        <FormControl
												componentClass="textarea"
				    	          placeholder="Estou me sentindo..."
				    	          onChange={this.handleChange}
				    	        />
				    	        <FormControl.Feedback />
				    	        <HelpBlock>Escolha uma tag de acordo com o que está sentindo</HelpBlock>
				    	    	</FormGroup>
				        	</form>

				          <ReactTags tags={tags}
                    value={this.state.tags} onChange={this.handleChange}
					          handleDelete={this.handleDelete}
					          handleAddition={this.handleAddition}
					          handleDrag={this.handleDrag}
                    validate={this.validate}
									/>

				          <ButtonToolbar>
				          	<Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>Enviar</Button>
				          </ButtonToolbar>
        			</div>
        		</Col>

        	</Row>
        </Grid>
      )
    }
}


export default FeelingsForm
