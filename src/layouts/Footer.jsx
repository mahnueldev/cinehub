import React from 'react';
import data from '../assets/data/footer-list.json';
import { Button } from '../components';

const Footer = () => {
  return (
    <main className='p-32 xl:flex xl:justify-between bg-gradient-to-r from-red-dk to-red sm:space-y-12'>
        <section className='xl:space-y-4 space-x-8 xl:flex-col sm:flex justify-center items-center w-64'>
            <h2 className='text-white  '>Ready to get started?</h2>
            <Button text='Subscribe' backgroundColor={'#303230'}/>
        </section>
    <section className='flex mt-4 justify-center space-x-20 text-white'>
      {Object.keys(data).map((objKey) => (
        <div key={objKey} className='text-2xl'>
          <h2 className='font-bold text-base'>{data[objKey].heading}</h2>
          <ul className='text-base'>
            {data[objKey].links.map((link) => (
              <li key={link.title}>
                <a href={link.url} className='text-base font-thin'>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    </main>
  );
};

export default Footer;
