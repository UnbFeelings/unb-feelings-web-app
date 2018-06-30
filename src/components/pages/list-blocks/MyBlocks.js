import React from 'react';

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import BlockCard from './BlockCard';
import axios from '../../../configs/axios';

class MyBlocks extends React.Component {
  state = {
    blocks: [],
  }

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData() {
    axios.get('users/blocks/').then(resp => {
      this.setState({ blocks: resp.data.results });
    });
  }

  blockInfo(blocked) {
    return (<BlockCard user_id={blocked.id}/>);
  }

  render() {
    const blockeds = this.state.blocks.map(blocked => this.blockInfo(blocked));

    return (
      <div className="Blockeds">
        <Grid item xs={12} md={6}>
          <Typography variant="title" className="blocked-list">
            Usuários Bloqueados
          </Typography>
          <div className="blocked-users">
            <List>
              {blockeds}
            </List>
          </div>
        </Grid>
    </div>
    );
  }
}

export default (MyBlocks);
