import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class SubjectsSelectInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subjectsList: [],
      selectedSubject: " ",
      isLoad: false
      }
    this.fetchSubjects = this.fetchSubjects.bind(this)
    // this.handleSelect = this.handleSelect.bind(this)
    this.switchSubject = this.switchSubject.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }

  async componentDidMount(){
    const responseJson = await this.fetchSubjects()
    const subjects = responseJson.results
    this.setState({
      subjectsList: [...subjects],
      isLoad: true

    });
  }

  async fetchSubjects(){
    const response = await fetch('http://localhost:8000/api/subjects/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      }
    })

    const responseJson = await response.json()
    return responseJson
  }

  switchSubject (e) {
  		var newSubject = e.target.value;
  		this.setState({
  			selectedSubject: newSubject,
  			selectValue: null,
  		});
  	}

    updateValue (newValue) {
		this.setState({
			selectValue: newValue,
		});
    this.props.onChange(newValue);
	}


render(){
    var listOptions = [];
    const list =  this.state.subjectsList.map((subject, i) => {
            // console.log("list value: "+ subject.id +" label: " + subject.name)
            return listOptions.push({value: subject.id, label: subject.name})
          })
    // console.log("listOptions: "+listOptions);
    console.log("id: "+this.state.selectValue)
      return(
        <Select
					id="state-select"
          name="selected-state"
          placeholder="Selecione uma disciplina"
          simpleValue
          autoFocus
          // ref={(ref) => { this.selectedSubject = ref; }}
					onBlurResetsInput={false}
					onSelectResetsInput={false}
					options={listOptions}
          disabled={false}
					clearable={true}
					value={this.state.selectValue}
					onChange={this.updateValue}
					rtl={false}
					searchable={true}
				/>
      )
  }
}

export default SubjectsSelectInput
