import { Footer, Header } from '../layouts';
// import {  Route, Routes } from 'react-router-dom';
// import { Action, Drama, Fantacy, Adventure, Horror } from '../sub-pages';
import { Submenu, TrendCard } from '../components';


const Home = () => {
  return (
    <div>
      <Header />
      <Submenu />
      <TrendCard/>
     <Footer/>
     
      </div>
  );
};

export default Home;
