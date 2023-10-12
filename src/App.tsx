import './App.css';
import Header from './components/Header/Header';

import {Routes, Route, Link} from "react-router-dom"
import Homepage from './components/Pages/Homepage/Homepage';
import Roomspage from './components/Pages/Roomspage/Roomspage';
import Excursionpage from './components/Pages/Excursionpage/Excursionpage';
import Aboutpage from './components/Pages/Aboutpage/Aboutpage';
import Contactpage from './components/Pages/Contactpage/Contactpage';
import NotFoundPage from './components/Pages/Notfoundpage/Notfoundpage';
import Layout from './components/Layout';


function App() {
  return (
  <>
    {/* Роуты для элментов меню навигации */}
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/rooms' element={<Roomspage/>}/>
        <Route path='/excursion' element={<Excursionpage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/contact' element={<Contactpage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
  </Routes>
  </>
    
  );
}

export default App;
