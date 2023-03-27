import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Loader = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/lottie/movie-load.json'),
      colors: {
        'Color 1': '#FF0000', // replace Color 1 with the name of the color you want to change
      },
    });
  }, []);

  return (
    <section className='flex justify-center items-center'>
      <div className='w-16 bg-white rounded-full' ref={container}></div>
    </section>
  );
};

export default Loader;
