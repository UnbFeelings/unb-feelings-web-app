import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

/* eslint-disable no-unused-vars */
const styles = theme => ({
  textField: {
    width: '100%',
  },
});

class TagsField extends React.Component {
  render() {
    const { classes, tags, handleChange } = this.props;

    return (
      <div className="TagsField">
        <TextField
          id="tags"
          name="tags"
          label="Tags, ex: #deuruim #deu_ruim_que_nada #agora-vai"
          multiline
          rows="2"
          value={tags}
          onChange={handleChange('tags')}
          className={classes.textField}
          margin="normal"
          inputProps={{
            maxLength: 80,
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(TagsField);
