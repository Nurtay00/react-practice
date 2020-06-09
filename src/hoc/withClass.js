import React from 'react';
const withClass = (Compe, className) => {
  return (props) => {
    return (
      <div className={className}>
        <Compe {...props} />
      </div>
    );
  };
};
export default withClass;
