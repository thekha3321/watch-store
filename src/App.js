// import classnames from 'classnames/bind';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './components/Layout/Footer';

// import styles from './App.module.scss';
import Header from './components/Layout/Header';
// import ShopSection from './components/Layout/ShopSection';
import Cart from './screens/Cart';
import Home from './screens/Home';
import Login from './screens/Login';
import Order from './screens/Order';
import Register from './screens/Register';
import Shipping from './screens/Shipping';
import SingleProduct from './screens/SingleProduct';

// const cx = classnames.bind(styles);

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/shipping' element={<Shipping/>}/>
                <Route path='/order' element={<Order/>}/>
                <Route path='/products/:id' element={<SingleProduct/>}/>
                
                {/* <Route path='/products/:id' element={<SingleProduct/>}/> */}
            </Routes>
        </Router>
    );
}

export default App;
