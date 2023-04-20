
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import ProductDesc from './Components/ProductDesc';

function App() {
  return (
    <div className="App">
            <Router>
      <Navbar />

        <Routes>
        <Route path='' element={<Products />}/>
        <Route path='product/:id' element={<ProductDesc />} />
        </Routes>

      </Router>
   
    </div>
  );
}

export default App;
