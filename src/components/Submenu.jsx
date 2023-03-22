import { useState } from 'react';
import Content from './Content'; // import the component that renders the content

const Submenu = () => {
  const [activeButton, setActiveButton] = useState('Action');

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  return (
    <div className='flex flex-col   bg-gray'>
      <ul className='flex items-start py-3 list-none tracking-wide font-extralight space-x-5 ml-12'>
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
      <div className="content-container bg-gray-light">
        {activeButton === 'Action' && <Content type='action' />}
        {activeButton === 'Adventure' && <Content type='adventure' />}
        {activeButton === 'Drama' && <Content type='drama' />}
        {activeButton === 'Horror' && <Content type='horror' />}
        {activeButton === 'Fantasy' && <Content type='fantasy' />}
      </div>
    </div>
  )
}

export default Submenu;
