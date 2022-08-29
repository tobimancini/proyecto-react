import './App.css';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './Components/NotFound';
import Cart from './Containers/Cart';
import ShopProvider, { Shop } from './Context/ShopContext';
import Navbar from './Components/NavBar';
import swal from 'sweetalert';

function App() {

  return (
    <ShopProvider>
    <div className='container'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/proyecto-react' element={<ItemListContainer/>}></Route>
          <Route path='/proyecto-react/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/proyecto-react/detail/:productId' element={<ItemDetailContainer/>}></Route>
          <Route path='/proyecto-react/cart' element={<Cart/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </ShopProvider>
  );
}

export default App;
