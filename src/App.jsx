import './App.css';
import ItemCount from './Components/ItemCount';
import Navbar from './Components/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './Components/NotFound';

function App() {

  const handleAdd = (count) => {
    console.log(`Se agregaron ${count} items al carrito.`);
  }

  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Welcome!"/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Welcome!"/>}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
       
       {/* <ItemCount handleAdd={handleAdd} initial={1} stock={5} /> */}
    </div>
  );
}

export default App;
