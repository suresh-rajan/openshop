import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id,name, value, label, type, onChange }) => (
  <div>
    {label && <label>{label}</label>}
    <div>
      <input {...{ id,name, value, type, onChange }}/>
    </div>
  </div>
);

const { string, func } = PropTypes;

Input.propTypes = {
    id:string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  label: string,
  type: string.isRequired,
  onChange: func.isRequired
};

export default Input;