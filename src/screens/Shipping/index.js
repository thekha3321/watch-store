import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Shipping.module.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';

function Shipping() {
    const cx = classNames.bind(styles);
    const [addr, setAddr] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <form className={cx('form')}>
                        <div className={cx('container')}>
                            <h1 className={cx('heading', 'text-upper')}>Delivery address</h1>
                            <label className={cx('title')}>Address</label>
                            <input
                                type="text"
                                onChange={(e) => setAddr(e.target.value)}
                                placeholder="Your address"
                                className={cx('input')}
                            />
                            <label className={cx('title')}>Phone</label>
                            <input
                                type="text"
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone"
                                className={cx('input')}
                            />
                            <Link to="/order">
                                <div
                                    onClick={() => {
                                        sessionStorage.setItem('Address', `${addr}`);
                                        sessionStorage.setItem('Phone', `${phone}`);
                                    }}
                                    className={cx('btn')}
                                >
                                    continue
                                </div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Shipping;
