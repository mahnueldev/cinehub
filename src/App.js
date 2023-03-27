import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../src/components';
import { Home, Series, Movies, List } from '../src/pages/index';

import '../src/tailwind.css';
// import SubRoute from './SubRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
          <Route path='/' element={<Home />} />
       
        <Route path='/series' element={<Series />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/list' element={<List />} />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
