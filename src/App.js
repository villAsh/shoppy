import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { auth, onAuthStateChanged } from './firebase-config';
import Navbar from './Components/Extras/Navbar';
import Products from './Components/Products/Products';
import ProductDesc from './Components/Products/ProductDesc';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Cart/Checkout';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ForgotPass from './Components/Auth/ForgotPass';




function App() {
	// const dispatch = useDispatch();	
	useEffect(() => {
		onAuthStateChanged(auth,(userAuth) => {
			if(userAuth){
				
			}
		})
	})
	return (
		<>
			<Router>
				<Navbar  />
				<Routes>
					<Route path="" element={<Register />} />
					<Route path="login" element={<Login />} />
					<Route path="forgot_password" element={<ForgotPass />}/>
					<Route path="home" element={<Products />} />
					<Route path="home/product/:id" element={<ProductDesc />} />
					<Route path="cart" element={<Cart />} />
					<Route path="cart/product/:id" element={<ProductDesc />} />
					<Route path='cart/checkout' element={<Checkout />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
