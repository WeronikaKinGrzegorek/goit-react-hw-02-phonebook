import React from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';

export const Filter = ({ value, onChange }) => (
  <>
    <p>Find contacts by name</p>
    <input type="text" value={value} onChange={onChange} />
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
