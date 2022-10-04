import React from 'react';
import classnames from 'classnames/bind';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function Register() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <form className={cx('form')}>
                        <div className={cx('container')}>
                            <h1 className={cx('heading')}>Đăng ký</h1>
                            <label className={cx('title')}>Email</label>
                            <input type="text" placeholder="Email" className={cx('input')} />
                            <label className={cx('title')}>Mật Khẩu</label>
                            <input type="password" placeholder="Password" className={cx('input')} />
                            <label className={cx('title')}>Xác nhận mật khẩu</label>
                            <input type="password" placeholder="Password" className={cx('input')} />
                            <button className={cx('btn')} type="submit">
                               Đăng ký 
                            </button>
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
