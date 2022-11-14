import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './Register.module.scss';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../firebase/config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Register({ title, setEmail, setPassword, handleAction, setName, setAddress, setPhone }) {
    const cx = classnames.bind(styles);

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    //     const handleSignIn = () => {    const authentication = getAuth()
    //     createUserWithEmailAndPassword(authentication, username, password)
    //     .then ((response) => {
    //         console.log(response)
    //     })
    // }
    // const createDoc = (newDataObj) => {
    //     alert('Thêm sản phẩm thành công');
    //     ref.doc(newDataObj.id).set(newDataObj);
    // };

    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <form className={cx('form')}>
                        <div className={cx('container')}>
                            <h1 className={cx('heading')}>{title}</h1>
                            <label htmlFor="user" className={cx('title')}>
                                Email
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                // onBlur={() => {
                                //     user.length > 0
                                //         ? (notiUser.innerHTML = 'Mời tiếp tục nhập')
                                //         : (notiUser.innerHTML = 'Mục này không được để trống');
                                // }}
                                type="text"
                                placeholder="Email"
                                className={cx('input')}
                                id="user"
                            />
                            <span id="notiuser"></span>
                            <label htmlFor="password" className={cx('title')}>
                                Mật Khẩu
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => {
                                    // password.length > 0
                                    //     ? (notiPassword.innerHTML = '')
                                    //     : (notiPassword.innerHTML = 'Mục này không được để trống');
                                }}
                                type="password"
                                placeholder="Password"
                                className={cx('input')}
                                id="password"
                            />
                            <span id="notipassword"></span>
                            <label htmlFor="name" className={cx('title')}>
                                Tên
                            </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                onBlur={() => {
                                    // password.length > 0
                                    //     ? (notiPassword.innerHTML = '')
                                    //     : (notiPassword.innerHTML = 'Mục này không được để trống');
                                }}
                                type="text"
                                placeholder="Tên"
                                className={cx('input')}
                                id="name"
                            />
                            <label htmlFor="name" className={cx('title')}>
                                Địa chỉ
                            </label>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                onBlur={() => {
                                    // password.length > 0
                                    //     ? (notiPassword.innerHTML = '')
                                    //     : (notiPassword.innerHTML = 'Mục này không được để trống');
                                }}
                                type="text"
                                placeholder="Địa chỉ"
                                className={cx('input')}
                                id="addr"
                            />
                            <label htmlFor="name" className={cx('title')}>
                                Số điện thoại
                            </label>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                onBlur={() => {
                                    // password.length > 0
                                    //     ? (notiPassword.innerHTML = '')
                                    //     : (notiPassword.innerHTML = 'Mục này không được để trống');
                                }}
                                type="text"
                                placeholder="SĐT..."
                                className={cx('input')}
                                id="phone"
                            />
                            {/* <label htmlFor="passwordConfirm" className={cx('title')}>
                                Xác nhận mật khẩu
                            </label>
                            <input
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                onBlur={() => {
                                    password === passwordConfirm
                                        ? (notiPasswordConfirm.innerHTML = 'Mật khẩu trùng khớp')
                                        : (notiPasswordConfirm.innerHTML = 'Mật khẩu không trùng khớp');
                                }}
                                type="password"
                                placeholder="Password"
                                className={cx('input')}
                                id="passwordconfirm"
                            />
                            <span id="notipasswordconfirm"></span>
                            <label htmlFor="phone" className={cx('title')}>
                                Số điện thoại
                            </label>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                onBlur={() => {
                                    phone.length > 0
                                        ? (notiPhone.innerHTML = '')
                                        : (notiPhone.innerHTML = 'Mục này không được để trống');
                                }}
                                type="text"
                                placeholder="0123..."
                                className={cx('input')}
                                id="phone"
                            />
                            <span id="notiphone"></span>
                            <label htmlFor="address" className={cx('title')}>
                                Địa chỉ hiện tại
                            </label>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                onBlur={() => {
                                    address.length > 0
                                        ? (notiAddress.innerHTML = '')
                                        : (notiAddress.innerHTML = 'Mục này không được để trống');
                                }}
                                type="text"
                                placeholder="VD: Đà Nẵng..."
                                className={cx('input')}
                                id="address"
                            />
                            <span id="notiaddress"></span>
                             */}
                            <div
                                variant="contained"
                                onClick={() => {
                                    handleAction();
                                    document.getElementById('email').value = '';
                                    document.getElementById('password').value = '';
                                    document.getElementById('name').value = '';
                                    document.getElementById('phone').value = '';
                                    document.getElementById('addr').value = '';
                                }}
                                className={cx('btn')}
                                // onClick={() => {
                                // createDoc({ user, passwordConfirm, address, phone, id: uuidv4() });
                                // }}
                            >
                                {title}
                            </div>
                            <p>
                                <Link to="/login">
                                    I have Account <strong>Đăng Nhập</strong>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
