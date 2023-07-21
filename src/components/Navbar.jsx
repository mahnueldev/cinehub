import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import navList from '../assets/data/nav-items.json';
import Button from './Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const webView = (
    <div className='flex space-x-20 content-center items-center'>
      <h1 className='text-red font-bold text-2xl'>Cinehub</h1>
      <ul className='hidden md:flex items-start justify-between list-none tracking-wide font-extralight space-x-5'>
        {navList.navList.links.map((link, index) => (
          <li key={index} className='text-white'>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  const mobileView = (
    <div className='md:hidden flex items-center'>
      {isMobileMenuOpen ? (
        <AiOutlineClose
          onClick={handleMobileMenuToggle}
          className='text-white text-2xl cursor-pointer'
        />
      ) : (
        <AiOutlineMenu
          onClick={handleMobileMenuToggle}
          className='text-white text-2xl cursor-pointer'
        />
      )}
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 right-0 bg-gray'>
          <ul className='flex flex-col items-center justify-center mt-4'>
            {navList.navList.links.map((link, index) => (
              <li key={index} className='text-white my-2'>
                <Link to={link.url} onClick={closeMobileMenu}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <nav className='flex fixed w-screen z-10 items-center justify-between px-4 py-3 bg-gray'>
      {webView}
      {mobileView}

      {/* Sign-in button */}
      <div className='hidden md:block relative'>
        <Button text='Sign-in' backgroundColor={'red'} />
      </div>
    </nav>
  );
};

export default Navbar;
