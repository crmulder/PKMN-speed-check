import React from 'react';
import PropTypes from 'prop-types';
import './TestComponent.css';

const TestComponent = () => (
  <div className="TestComponent" data-testid="TestComponent">
    The most basic of additions imaginable.
  </div>
);

TestComponent.propTypes = {};

TestComponent.defaultProps = {};

export default TestComponent;
