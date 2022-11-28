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
                                Mật Khẩu
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
                                placeholder="Tên"
                                className={cx('input')}
                                id="name"
                            />
                            <label htmlFor="name" className={cx('title')}>
                                Địa chỉ
                            </label>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                onBlur={() => {}}
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
                                onBlur={() => {}}
                                type="text"
                                placeholder="SĐT..."
                                className={cx('input')}
                                id="phone"
                            />
                            <div variant="contained" onClick={handleAction} className={cx('btn')}>
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
