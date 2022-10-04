// import classnames from 'classnames/bind';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import AdminAccountManager from './adminscreens/AdminAccountManager';
import AdminAddProduct from './adminscreens/AdminAddProduct';
import AdminBill from './adminscreens/AdminBill';
import AdminHome from './adminscreens/AdminHome';
import AdminProducts from './adminscreens/AdminProducts';
import AdminPromotion from './adminscreens/AdminPromotion';
import AdminStatistical from './adminscreens/AdminStatistical';
import Loading from './components/Layout/Loading';
import ShopSaling from './components/Layout/ShopSaling';
import Brand from './screens/Brand';
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
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/shipping' element={<Shipping/>}/>
                <Route path='/order' element={<Order/>}/>
                <Route path='/products/:productId' element={<SingleProduct/>}/>
                <Route path='/admin' element={<AdminHome/>}/>
                <Route path='/admin/products' element={<AdminProducts/>}/>
                <Route path='/admin/addproduct' element={<AdminAddProduct/>}/>
                <Route path='/admin/bill' element={<AdminBill/>}/>
                <Route path='/admin/accountmanager' element={<AdminAccountManager/>}/>
                <Route path='/admin/promotion' element={<AdminPromotion/>}/>
                <Route path='/admin/statistical' element={<AdminStatistical/>}/>
                <Route path='/brand/:productBrand' element={<Brand/>}/>
                <Route path='/saling' element={<ShopSaling/>}/>

            
                {/* <Route path='/products/:id' element={<SingleProduct/>}/> */}
            </Routes>
        </Router>
    );
}

export default App;
