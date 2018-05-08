import React from 'react';

import { WebDataStates } from '../../../redux/initial-state';

class Feelings extends React.Component {
  componentDidMount() {
    const { NOT_REQUESTED } = WebDataStates;
    const coursesState = this.props.courses.state;

    if (coursesState === NOT_REQUESTED) {
      this.props.requestCourses();
    }
  }

  render() {
    const { courses } = this.props;

    return (
      <div className="Feelings">
        <select className="form-control">
          <option>Selecione um curso</option>

          {courses.data.map(course =>
            <option key={course.id} value={course.id}>{course.name}</option>
          )}
        </select>
      </div>
    );
  }
}

export default Feelings;