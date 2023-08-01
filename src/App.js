import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import firebase from './firebase/config';

import AdminAccountManager from './adminscreens/AdminAccountManager';
import AdminAddProduct from './adminscreens/AdminAddProduct';
import AdminBill from './adminscreens/AdminBill';
import AdminHome from './adminscreens/AdminHome';
import AdminProducts from './adminscreens/AdminProducts';
import AdminPromotion from './adminscreens/AdminPromotion';
import AdminStatistical from './adminscreens/AdminStatistical';
import ShopSaling from './components/Layout/ShopSaling';
import Brand from './screens/Brand';
import Cart from './screens/Cart';
import Home from './screens/Home';
import Login from './screens/Login';
import Order from './screens/Order';
import Register from './screens/Register';
import Shipping from './screens/Shipping';
import SingleProduct from './screens/SingleProduct';
import Profile from './screens/profile';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Bill from './screens/Bill/index';
function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [user, setUser] = useState();
    const auth = getAuth();
    let navigate = useNavigate();
    const usersRef = firebase.firestore().collection('users');
    const getUser = () => {
        usersRef.where('email', '==', email).onSnapshot((querySnapShot) => {
            querySnapShot.forEach((doc) => {
                setUser(doc.data());
            });
        });
    };
    const users = {
        name,
        email,
        password,
        address,
        phone,
        rule: 0,
        avatar: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
        id: uuidv4().slice(0, 6),
    };
    const handleAction = async (id) => {
        if (id === 1) {
            await signInWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    if (auth) console.log(auth.currentUser);
                    sessionStorage.setItem('Email', email);
                    sessionStorage.setItem('Address', user.address);
                    sessionStorage.setItem('Phone', user.phone);
                    sessionStorage.setItem('Name', user.name);
                    sessionStorage.setItem('Uid', user.id);
                    sessionStorage.setItem('avatar', user.avatar);
                    navigate('/');
                })
                .catch(() => {
                    alert(`Tài khoản Email: ${email} không tồn tại`);
                });
        }
        if (id === 2) {
            await createUserWithEmailAndPassword(auth, email, password, name, address, phone)
                .then((response) => {
                    usersRef
                        .doc(users.id)
                        .set(users)
                        .then(() => {
                            navigate('/');
                            sessionStorage.setItem('Email', email);
                            sessionStorage.setItem('Name', name);
                            sessionStorage.setItem('Address', address);
                            sessionStorage.setItem(
                                'avatar',
                                'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
                            );
                            sessionStorage.setItem('Phone', phone);
                            sessionStorage.setItem('Uid', users.id);
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                })
                .catch(() => {
                    alert(`Tài khoản Email: ${email} không đúng hoặc đã tồn tại`);
                });
        }
    };
    useEffect(() => {
        getUser();
    }, [email]);

    return (
        <PayPalScriptProvider
            options={{
                'client-id': 'AR8mDO-pNbDE2wtBToLYuAJcc-WG3Nd7i_RVmIzjmdPLMRGhGQRoaAoRzX_ov07YiEP2tE5f9yptvbnq',
            }}
        >
            {' '}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        <Login
                            title="Login"
                            setEmail={setEmail}
                            setPassword={setPassword}
                            handleAction={() => handleAction(1)}
                        />
                    }
                />
                <Route
                    path="/register"
                    element={
                        <Register
                            title="Sign up"
                            setEmail={setEmail}
                            setPassword={setPassword}
                            setName={setName}
                            setAddress={setAddress}
                            setPhone={setPhone}
                            handleAction={() => handleAction(2)}
                        />
                    }
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/order" element={<Order />} />
                <Route path="/products/:productId" element={<SingleProduct />} />
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/addproduct" element={<AdminAddProduct />} />
                <Route path="/admin/bill" element={<AdminBill />} />
                <Route path="/admin/accountmanager" element={<AdminAccountManager />} />
                <Route path="/admin/promotion" element={<AdminPromotion />} />
                <Route path="/admin/statistical" element={<AdminStatistical />} />
                <Route path="/brand/:productBrand" element={<Brand />} />
                <Route path="/products" element={<ShopSaling />} />
                <Route path="/profile/:userId" element={<Profile />} />
                <Route path="/bill/:billId" element={<Bill />} />
            </Routes>
        </PayPalScriptProvider>
    );
}

export default App;
