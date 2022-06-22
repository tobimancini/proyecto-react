import './App.css';
import Navbar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

function App() {
  return (
    <div className='container'>
       <Navbar/>
       <ItemListContainer greeting="Bienvenidos!"/>
    </div>
  );
}

export default App;
