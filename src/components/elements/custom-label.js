import React from 'react';

function CustomLabel(props) {
  const { children, position } = props  
  return(
    <label className={`${position}`}> 
      {children}
    </label>
  )
}

export default CustomLabel