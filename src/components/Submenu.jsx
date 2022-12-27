import { Link } from 'react-router-dom';

const Submenu = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3 bg-gray'>
        <ul className='flex items-start justify-between list-none tracking-wide font-extralight space-x-5 ml-12'>
        <li className='mr-3'>
          <Link to='/action' className='text-white hover:text-red'>
            Action
          </Link>
        </li>
        <li className='mr-3'>
          <Link to='/adventure' className='text-white hover:text-red '>
          Adventure
          </Link>
        </li>
        <li className='mr-3'>
          <Link to='./drama' className='text-white hover:text-red'>
            Drama
          </Link>
        </li>
        <li className='mr-3'>
          <a href='./horror' className='text-white hover:text-red'>
           Horror
          </a>
        </li>
        <li className='mr-3'>
          <a href='./fantacy' className='text-white hover:text-red'>
           Fantacy
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Submenu