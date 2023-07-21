import { useState } from 'react';
import MovieCard from './MovieCard'; 

const Submenu = () => {
  const [activeButton, setActiveButton] = useState('Action');

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  
  return (
    <div className='flex flex-col bg-gray'>
      <ul className='flex items-start py-3 list-none tracking-wide font-extralight space-x-5 xl:ml-12 sm:ml-2'>
        <li className='mr-3'>
          <button
            className={`text-white hover:text-red ${activeButton === 'Action' ? 'font-bold' : ''}`}
            onClick={() => handleClick('Action')}
          >
            Action
          </button>
        </li>
        <li className='mr-3'>
          <button
            className={`text-white hover:text-red ${activeButton === 'Adventure' ? 'font-bold' : ''}`}
            onClick={() => handleClick('Adventure')}
          >
            Adventure
          </button>
        </li>
        <li className='mr-3'>
          <button
            className={`text-white hover:text-red ${activeButton === 'Drama' ? 'font-bold' : ''}`}
            onClick={() => handleClick('Drama')}
          >
            Drama
          </button>
        </li>
        <li className='mr-3'>
          <button
            className={`text-white hover:text-red ${activeButton === 'Horror' ? 'font-bold' : ''}`}
            onClick={() => handleClick('Horror')}
          >
            Horror
          </button>
        </li>
        <li className='mr-3'>
          <button
            className={`text-white hover:text-red ${activeButton === 'Fantasy' ? 'font-bold' : ''}`}
            onClick={() => handleClick('Fantasy')}
          >
            Fantasy
          </button>
        </li>
      </ul>
      <div className="content-container bg-gray">
        {activeButton === 'Action' && <MovieCard type='action' />}
        {activeButton === 'Adventure' && <MovieCard type='adventure' />}
        {activeButton === 'Drama' && <MovieCard type='drama' />}
        {activeButton === 'Horror' && <MovieCard type='horror' />}
        {activeButton === 'Fantasy' && <MovieCard type='fantasy' />}
      </div>
    </div>
  )
}

export default Submenu;
