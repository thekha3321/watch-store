import React from 'react';
import classnames from 'classnames/bind';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';

function Register({ title, setEmail, setPassword, handleAction, setName, setAddress, setPhone }) {
    const cx = classnames.bind(styles);
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
                                type="text"
                                placeholder="Email"
                                className={cx('input')}
                                id="user"
                            />
                            <span id="notiuser"></span>
                            <label htmlFor="password" className={cx('title')}>
                                Password
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => {}}
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
                                onBlur={() => {}}
                                type="text"
                                placeholder="Name"
                                className={cx('input')}
                                id="name"
                            />
                            <label htmlFor="name" className={cx('title')}>
                                Address
                            </label>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                onBlur={() => {}}
                                type="text"
                                placeholder="Address"
                                className={cx('input')}
                                id="addr"
                            />
                            <label htmlFor="name" className={cx('title')}>
                                Phone number
                            </label>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                onBlur={() => {}}
                                type="text"
                                placeholder="+84"
                                className={cx('input')}
                                id="phone"
                            />
                            <div
                                variant="contained"
                                onClick={() => {
                                    handleAction(2);
                                }}
                                className={cx('btn')}
                            >
                                {title}
                            </div>
                            <p>
                                <Link to="/login">
                                    I have an account ?<strong>Log in</strong>
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
