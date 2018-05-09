import PropTypes from 'prop-types';

export const CoursePropType = PropTypes.objectOf({
  id: PropTypes.number,
  name: PropTypes.string,
  campus: PropTypes.number,
});

export const SubjectPropType = PropTypes.objectOf({
  id: PropTypes.string,
  name: PropTypes.string,
  course: PropTypes.number,
});

export const UserPropType = PropTypes.objectOf({
  id: PropTypes.number,
  email: PropTypes.string,
  token: PropTypes.string,
  course: PropTypes.objectOf(CoursePropType),
});

export const SubjectListPropType = PropTypes.arrayOf(SubjectPropType);

export const CourseListPropType = PropTypes.arrayOf(CoursePropType);
