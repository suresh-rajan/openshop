import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id,name, value, label, type, onChange }) => (
  <div>
    {label && <label>{label}</label>}
    <div>
      <input  className="w3-input w3-card w3-section" {...{ id,name, value, type, onChange } } placeholder={name}/>
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