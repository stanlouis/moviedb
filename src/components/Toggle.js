import React from 'react';
import { connect } from 'react-redux';

import { toggleMessage, getMovies } from '../actions';

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    {messageVisibility && <p className="text-white">Now you see me</p>}
    <button onClick={toggleMessage} type="button">
      Toggle Me
    </button>
    <button onClick={getMovies} type="button">
      Get Movies
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
});

export default connect(
  mapStateToProps,
  { toggleMessage, getMovies },
)(Toggle);
