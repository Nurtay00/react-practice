import React from 'react';
import { ClicedComplex } from '../App';
export default (props) => {
  return (
    <div
      style={{
        border: '1px solid #333',
        width: '200px',
        margin: '0 auto',
        padding: '5px',
      }}
    >
      <h3>counter2</h3>
      <ClicedComplex.Consumer>
        {(cliced) => (cliced ? <p>click</p> : null)}
      </ClicedComplex.Consumer>
    </div>
  );
};
