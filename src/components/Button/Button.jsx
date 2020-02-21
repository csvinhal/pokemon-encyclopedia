import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { label, priority } = props;
  const className = ['button', priority];
  return (
    <button className={className.join(' ')} type="button">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};
export default Button;
