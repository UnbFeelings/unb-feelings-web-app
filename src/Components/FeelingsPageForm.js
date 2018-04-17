import React from 'react'
import './App.css';
import { WithContext as ReactTags } from 'react-tag-input';
import { Button, FormGroup, FormControl, HelpBlock, ControlLabel, Row, Grid, Col} from 'react-bootstrap'

class FeelingsPageForm extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
          tags: [],
          value: ''
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

    handleSubmit(event) {
      alert(': ' + this.state.value);
      event.preventDefault();
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
    	            type="text"
    	            value={this.state.value}
    	            placeholder="Estou me sentindo..."
    	            onChange={this.handleChange}
    	          />
    	          <FormControl.Feedback />
    	          <HelpBlock>Escolha uma tag de acordo com o que está sentindo</HelpBlock>
    	        </FormGroup>
        	</form>
        	 
          <ReactTags tags={tags}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag} />
          <br/>
          <Button bsStyle="success" bsSize="medium" type="submit">Enviar	</Button>
        </div>
        </Col>
        </Row>	
        </Grid> 
        )
    }
};

export default FeelingsPageForm