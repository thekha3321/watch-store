import React from 'react';
import classnames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function Login() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <form className={cx('form')}>
                        <div className={cx('container')}>
                            <h1 className={cx('heading')}>Đăng Nhập</h1>
                            <label className={cx('title')}>Email</label>
                            <input type="text" placeholder="Email" className={cx('input')} />
                            <label className={cx('title')}>Mật khẩu</label>
                            <input type="password" placeholder="Password" className={cx('input')} />
                            <button className={cx('btn')} type="submit">
                                Đăng nhập
                            </button>
                            <p>
                                <Link to="/register"><strong>Create Account</strong></Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
