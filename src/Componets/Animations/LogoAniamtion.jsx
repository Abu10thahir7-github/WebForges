import React from 'react';
import Lottie from 'lottie-react';
import logoAnimation from '../../assets/Logo-animation.json'; // adjust the path if needed

const LogoLoader = () => {
  return (
    <div className='h-screen'>
      <Lottie animationData={logoAnimation} loop={true} />
    </div>
  );
};

export default LogoLoader;
