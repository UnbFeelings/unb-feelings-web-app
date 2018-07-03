import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import axios from '../../../configs/axios';
import Endpoints from '../../../configs/endpoints';
import SupportItem from '../../shared/SupportItem';

class SupportTimeline extends React.Component {
  state = {
    supports: { results: [] },
    // gettingData: false,
    snackbar: {
      display: false,
      message: '',
    },
  };

  async componentDidMount() {
    this.fetchSupports();
  }

  fetchSupports = async () => {
    let endpoint;
    if (this.props.match.url === '/supports-sent') {
      endpoint = Endpoints.SUPPORT_FROM_STUDENT;
    } else {
      endpoint = Endpoints.SUPPORT_TO_STUDENT;
    }

    // this.setState({ gettingData: true });

    try {
      const response = await axios.get(`${endpoint}/`);
      this.setState({ supports: response.data });
    } catch (err) {
      // console.log('fetchReceivedSupports - err', err);
      this.setState({ snackbar: { display: true, message: 'Ocorreu um erro, tente novamente.' } });
    } finally {
      // this.setState({ gettingData: false });
    }
  };

  removeSupport = async id => {
    try {
      await axios.delete(`${Endpoints.SUPPORT}/${id}/`);
      this.setState({ snackbar: { display: true, message: 'Apoio removido com sucesso' } });
      this.fetchSupports();
    } catch (err) {
      // console.log('removeSupport - err', err);
      this.setState({ snackbar: { display: true, message: 'Ocorreu um erro, tente novamente.' } });
    }
  };

  renderSupport = (item) => (
    <a
      key={item.id}
      href={`/university-posts/${item.student_to}`}
      style={{ textDecoration: 'none' }}
    >
      <SupportItem
        item={item}
        removeItem={this.removeSupport}
      />
    </a>
  );

  handleCloseSnackbar = () => {
    // Hide the successful post creation message
    this.setState({ snackbar: { display: false, message: '' } });
  };

  createSupportList = () => {
    if (this.state.supports.results.length === 0) {
      return null;
    }

    return this.state.supports.results.map(item => this.renderSupport(item));
  };

  render() {
    return (
      <React.Fragment>
        {this.createSupportList()}

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackbar.display}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackbar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.snackbar.message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleCloseSnackbar}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </React.Fragment>
    );
  }
}

export default SupportTimeline;
