import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../features/tmbd/tmbdSlice';
import { useDispatch, useSelector } from 'react-redux';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CircleGuage from './CircleGuage';
import Loader from './Loader';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const MovieCard = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showBackgroundImage, setShowBackgroundImage] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const { movies, loading, error } = useSelector((state) => state.tmbd);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    setShowBackgroundImage(true);
  }, [activeSlideIndex]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className='flex justify-center items-center m-12'>
        <p className='p-4 text-red bg-white border rounded-2xl'>
          Cannot get info at this time
        </p>
        ;
      </div>
    );
  }

  return (
    <section className='flex-auto'>
      <Swiper
        loop={true}
        slidesPerView={1} // Show one slide at a time on mobile
        navigation={{
          prevEl: 'swiper-button-prev',
          nextEl: 'swiper-button-next',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
        pagination={{ el: 'swiper-pagination', clickable: true }}
        onSlideChange={handleSlideChange}
        scrollbar={{ draggable: true }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <section
              className='p-28 w-screen transition duration-75 ease-in-out justify-center items-center'
              style={{
                backgroundImage:
                  index === activeSlideIndex
                    ? `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
                    : '',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
            >
              {index === activeSlideIndex && (
                <div className='absolute inset-0 bg-gradient-to-r from-black-opq to-gray w-screen transition duration-75 ease-in-out'></div>
              )}

              {index === activeSlideIndex && (
                <div
                  key={movie.id}
                  className='flex flex-col mb-4 z-20 drop-shadow-sm text-white w-2/6'
                >
                  <h2 className='text-2xl w-4/6'>{movie.title}</h2>
                  <p>{movie.release_date}</p>
                  <CircleGuage value={movie.vote_average} maxvalue={10} />
                </div>
              )}
              <div className='flex z-10'>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className='w-48 rounded-md transition duration-300 ease-in-out transform hover:scale-105'
                  style={{
                    boxShadow:
                      index !== activeSlideIndex
                        ? '0px 4px 8px rgba(0, 0, 0, 0.4)' // Add drop shadow to non-active slides
                        : '',
                  }}
                />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MovieCard;
