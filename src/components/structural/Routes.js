import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from '../shared/PrivateRoute';

// Public routes
import HomeContainer from '../pages/home/HomeContainer';
import SignUpContainer from '../pages/sign-up/SignUpContainer';

// Private routes
import FeelingsContainer from '../pages/feelings/FeelingsContainer';
import FeelingsTimeline from '../pages/feelings-timeline/FeelingsTimeline';
import SubjectTimeline from '../pages/feelings-timeline/SubjectTimeline';
import UniversityPosts from '../pages/university-posts/UniversityPosts';
import MySubjectChart from '../pages/mySubjectChart/MySubjectChart';

const Routes = ({ user }) => (
  <React.Fragment>
    <Route exact path="/" component={HomeContainer} />
    <Route path="/sign-up" component={SignUpContainer} />

    <Route
      path="/university-posts"
      component={UniversityPosts}
      user={user}
    />
    <Route
      path="/my-subject-chart"
      component={MySubjectChart}
      user={user}
    />
    <PrivateRoute
      path="/feelings"
      component={FeelingsContainer}
      user={user}
    />
    <Route
      path="/feelings-timeline"
      component={FeelingsTimeline}
      user={user}
    />
    <Route
      path="/subject-timeline"
      component={SubjectTimeline}
      user={user}
    />
  </React.Fragment>
);

export default Routes;
