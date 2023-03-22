import React from 'react';

const content = () => {
  return (
    <section className='flex pt-16 m-24'>
      <div className='flex flex-col '>
        <h1 className='mb-4'>Star Wars</h1>
        <p className='w-2/6'>
          Lorem ipsum dolor sit amet consectetur. Lacinia sodales magna
          adipiscing eu mauris at bibendum erat. Amet en.
        </p>
        <h3 className='mt-2'>2014</h3>
      </div>
      <main className='flex space-x-4 w-4/6'>
        <div className='w-48 h-58 rounded bg-red transition-all duration-200 ease-in-out hover:scale-105'></div>
        <div className='w-48 h-58 rounded bg-red transition-all duration-200 ease-in-out hover:scale-105'></div>
        <div className='w-48 h-58 rounded bg-red transition-all duration-200 ease-in-out hover:scale-105'></div>
        <div className='w-48 h-58 rounded bg-red transition-all duration-200 ease-in-out hover:scale-105'></div>
        <div className='w-48 h-58 rounded bg-red transition-all duration-200 ease-in-out hover:scale-105'></div>
      </main>
    </section>
  );
};

export default content;
