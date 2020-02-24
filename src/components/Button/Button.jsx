import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { label, priority, onClick } = props;
  const className = ['button', priority];
  return (
    <button className={className.join(' ')} type="button" onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
