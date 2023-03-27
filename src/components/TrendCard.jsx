import React, { useEffect } from 'react';
import { fetchTrending } from '../features/tmbd/tmbdSlice';
import { useDispatch, useSelector } from 'react-redux';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);
const TrendCard = () => {
  const { trending, loading, error } = useSelector((state) => state.tmbd);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);
  return (
    <section className=' bg-gradient-to-r from-black-opq2 to-gray'>
      <div className='text-white pl-10 pt-10  '>
      <h1 className='text-3xl' >Trending</h1>
      <div className='text-md  mt-4 cursor-pointer  '><p className='px-4 border rounded-xl w-max'>View all</p></div>
      </div>

    <Swiper
      // spaceBetween={20}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {trending.map((movie, index) => (
        <SwiperSlide key={movie.id}>
          <main className='mx-20 my-32'>
            <div className='w-max'>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className='w-60 rounded-md transition duration-300 ease-in-out transform hover:scale-105'
              style={{
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
              }}
            />
            </div>
      </main>
        </SwiperSlide>
      ))}
    </Swiper>
      </section>
  );
};

export default TrendCard;
