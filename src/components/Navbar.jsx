import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 py-3 bg-gray'>
        <div className= 'flex space-x-20 content-center'>
      <h1 className='text-red font-bold text-2xl'>Cinehub</h1>
      <ul className='flex items-start justify-between list-none tracking-wide font-extralight space-x-5'>
        <li className='mr-3'>
          <Link to='/' className='text-white hover:text-red'>
            Home
          </Link>
        </li>
        <li className='mr-3'>
          <Link to='/series' className='text-white hover:text-red '>
            Series
          </Link>
        </li>
        <li className='mr-3'>
          <Link to='./movies' className='text-white hover:text-red'>
            Movies
          </Link>
        </li>
        <li className='mr-3'>
          <a href='./list' className='text-white hover:text-red'>
           List
          </a>
        </li>
      </ul>
      </div>
      <div className='relative'>
        <button className='flex items-center text-white hover:text-gray-400 focus:outline-none'>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M9 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-9a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm8 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
