import React from 'react';

class Feelings extends React.Component {
  render() {
    const { logOff } = this.props;

    return (
      <div className="Feelings">
        HELLO !
        <button className="btn btn-outline-light"onClick={logOff}>Sair</button>
      </div>
    );
  }
}

export default Feelings;