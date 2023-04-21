import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import ProductDesc from './Components/ProductDesc';
import Cart from './Components/Cart';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="" element={<Products />} />
					<Route path="product/:id" element={<ProductDesc />} />
					<Route path="cart" element={<Cart />} />
					<Route path="cart/product/:id" element={<ProductDesc />} />

				</Routes>
			</Router>
		</div>
	);
}

export default App;
