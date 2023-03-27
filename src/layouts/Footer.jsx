import React from 'react';
import data from '../assets/data/footer-list.json';
import { Button } from '../components';

const Footer = () => {
  return (
    <main className='p-32 flex justify-between bg-gradient-to-r from-red-dk to-red'>
        <section className='space-y-8'>
            <h2 className='text-white'>Ready to get started?</h2>
            <Button text='Subscribe' backgroundColor={'#303230'}/>
        </section>
    <section className='flex justify-center space-x-20 text-white'>
      {Object.keys(data).map((objKey) => (
        <div key={objKey} className='text-2xl'>
          <h2 className='font-bold'>{data[objKey].heading}</h2>
          <ul>
            {data[objKey].links.map((link) => (
              <li key={link.title}>
                <a href={link.url} className='text-base'>{link.title}</a>
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
