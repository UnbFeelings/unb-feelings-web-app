import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { fetchUserRandomInfo } from '../../../utils/randomProfile';

class SupportItem extends React.Component {
  state = {
    avatarURL: '',
  };

  async componentWillMount() {
    try {
      const avatarURL = await fetchUserRandomInfo();
      this.setState({ avatarURL });
    } catch (e) {
      console.log('Could not fetch user info', e);
    }
  }

  render() {
    return (
      <div style={{ margin: 32 }}>
        <Card raised>
          <CardContent>
            <Grid container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar src={this.state.avatarURL} />
              </Grid>
              <Grid item xs>
                <Typography>{this.props.item.message}</Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              onClick={() => this.props.removeItem(this.props.item.id)}
            >
              Excluir
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

SupportItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default SupportItem;
