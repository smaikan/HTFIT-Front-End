
import { Route, Routes } from 'react-router-dom';

import Home from './layouts/Home';
import Proteins from './layouts/Proteins';
import Header from './components/header'
import Login from './layouts/Login';
import Productpage from './layouts/productpage';
import Cart from './layouts/cart';
import Footer from './components/footer';
import Performance from './layouts/Performance';
import Hacim from './layouts/Hacim';
import Zayiflama from './layouts/Zayiflama';
import Giyim from './layouts/Giyim';
import Aksesuar from './layouts/Aksesuar';




function App() {
  
 

  return (
    
    <div style={{backgroundColor: 'rgb(226, 231, 235)'}} className='min-h-screen flex flex-col'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/protein' element={<Proteins/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/performance' element={<Performance/>} />
        <Route path='/hacim' element={<Hacim/>} />
        <Route path='/zayiflama' element={<Zayiflama/>} />
        <Route path='/giyim' element={<Giyim/>} />
        <Route path='/aksesuar' element={<Aksesuar/>} />

        <Route path="/product/:id" element={<Productpage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}
 
export default App
