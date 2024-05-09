import React from 'react';
import PropTypes from 'prop-types';
import './TestComponent.css';
import TestComponent2 from '../TestComponent2/TestComponent2'

const TestComponent = () => (
  <div className="TestComponent" data-testid="TestComponent">
    
    <TestComponent2 />
    <div className='div2'>
      Future Component 2.
    </div>
  </div>
);

TestComponent.propTypes = {};

TestComponent.defaultProps = {};

export default TestComponent;
