import React, { useEffect } from 'react';
import { Button, Tags } from '../components';
import { fetchTrending } from '../features/tmbd/tmbdSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const { trending } = useSelector((state) => state.tmbd);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  const backgroundImageUrl = trending?.[0]?.poster_path;
  const firstResult = trending?.[0];
  const title = firstResult?.name ?? firstResult?.title ?? '';
  const overview = trending?.[0]?.overview;

  return (
    <section
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backgroundImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        // height: '100vh',
      }}
      className=' h-screen'
    >
      <div className='bg-gradient-to-r from-gray to-red-opacity-100-transparenth h-full px-28 flex-col items-center pt-28 '>
        <div className='mt-10'>
          <Tags text='Trending' />
          <h1 className='text-5xl text-white '>{title}</h1>
          <p className='text-white font-light text-xl mr-96 pr-96 mb-8'>
            {overview}
          </p>
          <Button text='Play' backgroundColor={'red'}/>
        </div>
      </div>
    </section>
  );
};

export default Header;
