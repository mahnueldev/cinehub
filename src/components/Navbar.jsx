// import { Link } from 'react-router-dom';
import navList from '../assets/data/nav-items.json';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between  px-4 py-3 bg-gray'>
        <div className= 'flex space-x-20 content-center items-center'>
      <h1 className='text-red font-bold text-2xl'>Cinehub</h1>
      <ul className='flex items-start justify-between list-none tracking-wide font-extralight space-x-5'>
      {navList.navList.links.map((link, index) => (
          <li key={index} className='text-white'>
            <a href={link.url} onClick={(e) => e.preventDefault()}>{link.title}</a>
          </li>
        ))}
      </ul>
      </div>
      <div className='relative'>
       <Button text='Sign-in' backgroundColor={'red'}/>
      </div>
    </nav>
  );
};

export default Navbar;
