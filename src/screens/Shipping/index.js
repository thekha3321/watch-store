import React from 'react';
import classNames from 'classnames/bind';
import styles from './Shipping.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Shipping() {
  return (
    <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <form className={cx('form')}>
                        <div className={cx('container')}>
                            <h1 className={cx('heading')}>ĐỊA CHỈ GIAO HÀNG</h1>
                            <label className={cx('title')}>Địa chỉ nhà</label>
                            <input type="text" placeholder="Địa chỉ nhà" className={cx('input')} />
                            <label className={cx('title')}>Thành phố</label>
                            <input type="password" placeholder="Thành phố" className={cx('input')} />
                            <label className={cx('title')}>số điện thoại</label>
                            <input type="password" placeholder="số điện thoại" className={cx('input')} />
                            <Link to='/order'>
                                <button className={cx('btn')} >
                                   TIẾP TỤC 
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
  )
}

export default Shipping;
