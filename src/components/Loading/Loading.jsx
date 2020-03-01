/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import './Loading.scss';

const Loading = React.forwardRef((props, ref) => {
  const { loading, children, ...other } = props;

  const contentClassName = ['loading__content'];
  const loaderClassName = ['loading__loader'];

  if (loading) {
    contentClassName.push('is-loading');
    loaderClassName.push('is-loading');
  }

  if (children) {
    loaderClassName.push('has-children');
  }

  return (
    <div className="loading__container" ref={ref} {...other}>
      <div className={contentClassName.join(' ')}>{children}</div>
      <div className={loaderClassName.join(' ')}>
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
});

Loading.defaultProps = {
  children: null,
};
Loading.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool.isRequired,
};

export default Loading;
