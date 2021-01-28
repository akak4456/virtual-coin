import React from 'react';

function booleanComponent({ bored }) {
  return <div>{bored ? '지겨워' : '안지겨워'}</div>;
}

export default booleanComponent;
