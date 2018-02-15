import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ text }) => (
  <p>Hello, {text}!</p>
);

Hello.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Hello;
