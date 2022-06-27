import './App.css';
import ItemCount from './Components/ItemCount';
import Navbar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

function App() {

  const handleAdd = () => {
    console.log("Se agregaron items al carrito.");
  }

  return (
    <div className='container'>
       <Navbar/>
       <ItemListContainer greeting="Bienvenidos!"/>
       <ItemCount handleAdd={handleAdd} initialStock={5} />
    </div>
  );
}

export default App;
