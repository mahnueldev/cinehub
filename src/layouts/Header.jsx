import { Button } from '../components';

const Header = () => {
  return (
    <section
      style={{
        // backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '100vh',
      }}
      className='bg-hero-pattern h-screen'
    >
      <div className='bg-gradient-to-r from-gray to-red-opacity-100-transparenth h-full px-28 flex-col items-center pt-28 '>
        <h1 className='text-5xl text-white '>Avatar</h1>
        <p className='text-white font-light text-xl mr-96 pr-96 mb-8'>
          The letter-spacing utility also comes with a number of pre-defined
          values that you can use to adjust the spacing between characters. For
          example, you can use the tight value to reduce the letter spacing, or
          the wide value to increase the letter spacing.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Header;
