import './App.css';
import Navbar from './Components/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './Components/NotFound';
import Cart from './Containers/Cart';
import ShopProvider, { Shop } from './Context/ShopContext';

function App() {

  return (
    <ShopProvider>
    <div className='container'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </ShopProvider>
  );
}

export default App;
