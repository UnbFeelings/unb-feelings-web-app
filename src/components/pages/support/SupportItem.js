import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const SupportItem = ({ item, removeItem }) => (
  <div style={{ margin: 32 }}>
    <Card raised>
      <CardContent>
        <Typography component="p">
          {item.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={() => removeItem(item.id)}
        >
          Excluir
        </Button>
      </CardActions>
    </Card>
  </div>
);

SupportItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default SupportItem;
