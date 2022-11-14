// import classnames from 'classnames/bind';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import firebase from './firebase/config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const authentication = getAuth();
    let navigate = useNavigate();

    // if (localStorage.getItem('Auth Token')) {
    //     const uid = authentication.lastNotifiedUid;
    //     console.log(uid);
    // }
    let dataUser = {
        email,
        password,
        name,
        address,
        phone,
        uid: uuidv4(),
    };
    const firestorageUser = firebase.firestore().collection('users');
    const handleAction = async (id) => {
        if (id === 1) {
            signInWithEmailAndPassword(authentication, email, password, name, address, phone).then((response) => {
                navigate('/home');
                localStorage.setItem('Email', `${email}`);
                localStorage.setItem('Name', `${name}`);
                localStorage.setItem('Address', `${address}`);
                localStorage.setItem('Phone', `${phone}`);
            });
        }
        if (id === 2) {
            createUserWithEmailAndPassword(authentication, email, password, name, address, phone)
                .then((response) => {
                    firestorageUser.doc(dataUser.uid).set(dataUser);
                    navigate('/home');
                    localStorage.setItem('Email', `${email}`);
                    localStorage.setItem('Name', `${name}`);
                    localStorage.setItem('Address', `${address}`);
                    localStorage.setItem('Phone', `${phone}`);
                })
                .catch(() => {
                    alert(`Tài khoản Email: ${email} đã tồn tại`);
                });
            // await setDoc(doc(firebase.firestore(), 'users', res.user.uid), {
            //     uid: res.user.uid,
            //     name,
            //     email,
            //     password,
            // });
        }
    };
    useEffect(() => {
        let authToken = localStorage.getItem('Auth Token');

        // phan quyen admin
        // if (authToken !== 'admin@gmail.com') {
        //     navigate('/home');
        // }
    }, []);

    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route
                path="/login"
                element={
                    <Login
                        title="Đăng Nhập"
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
                        title="Đăng Ký"
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
            <Route path="/saling" element={<ShopSaling />} />

            {/* <Route path='/products/:id' element={<SingleProduct/>}/> */}
        </Routes>
    );
}

export default App;
