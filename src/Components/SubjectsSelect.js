import React from 'react'
import { Checkbox, ListGroupItem, ListGroup } from 'react-bootstrap'

class SubjectsSelect extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subjectsList: [],
      selectedSubjects: [],
      isLoad: false
    }
    this.fetchSubjects = this.fetchSubjects.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
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

  handleCheck(event, subjectId){
    const isChecked = event.target.checked
    const selected = this.state.selectedSubjects

    if(isChecked){
      selected.push(subjectId)
    }else{
      const indexOfSubject = selected.indexOf(subjectId)
      selected.splice(indexOfSubject, 1)
    }

    this.setState({
      selectedSubjects: [...selected]
    })

    console.log("selected subjects: "+this.state.selectedSubjects)
  }

  render(){
    const list = this.state.subjectsList.map((subject) => {
      return(
        <ListGroupItem key={subject.id}>
          <Checkbox onClick={(event) => this.handleCheck(event, subject.id)}>
            {subject.name}
          </Checkbox>
        </ListGroupItem>)
      })

    return this.state.isLoad === true? (
      <ListGroup>{list}</ListGroup>
    ):(<h1>loading ... </h1>)
  }
}

export default SubjectsSelect
