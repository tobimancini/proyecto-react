import './App.css';
import ItemCount from './Components/ItemCount';
import Navbar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

function App() {

  const handleAdd = (count) => {
    console.log(`Se agregaron ${count} items al carrito.`);
  }

  return (
    <div className='container'>
       <Navbar/>
       <ItemListContainer greeting="Welcome!"/>
       <ItemCount handleAdd={handleAdd} initial={1} stock={5} />
    </div>
  );
}

export default App;
