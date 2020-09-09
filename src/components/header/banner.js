import React from 'react';

function Banner() {
  
  const onClick = () => {
    window.location.href = '/'
  }

  return(
    <div className='banner' onClick={onClick}>
      <img src='/resources/logo_no_title.jpg' alt="Carla Corporation"/>
    </div>
    )
}

export default Banner