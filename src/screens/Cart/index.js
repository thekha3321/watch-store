import React from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('container')}>
                    <div className={cx('heading')}>
                        <span>Giỏ hàng</span>
                    </div>
                </div>
                <div className="content">
                    <div className={cx('left')}>
                        <span className={cx('left-heading')}>
                            <div className={cx('product-info-top')}>HÌNH ẢNH</div>
                            <div className={cx('product-info-top')}>SẢN PHẨM</div>
                            <div className={cx('product-info-top')}>GIÁ</div>
                            <div className={cx('product-info-top')}>SỐ LƯỢNG</div>
                            <div className={cx('product-info-top')}>THÀNH TIỀN</div>
                            <div className={cx('product-info-top')}>XÓA</div>
                        </span>
                        <div className={cx('left-content')}>
                            <div className={cx('product-info-midle')}>
                                <img
                                    src="https://cdn3.dhht.vn/wp-content/uploads/2022/08/C029.807.11.031.60-399x399.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={cx('product-info-midle', 'ta-none')}>
                                <Link to="">
                                    Certina C029.807.11.031.60 Nam Kính Sapphire Automatic Cơ Tự Động Dây Kim Loại Mặt
                                    Số 39mm
                                </Link>
                            </div>
                            <div className={cx('product-info-midle')}>
                                <span>20.200.000đ</span>
                            </div>
                            <div className={cx('product-info-midle')}>
                                <span>1</span>
                            </div>
                            <div className={cx('product-info-midle')}>
                                <span>20.200.000đ</span>
                            </div>
                            <div className={cx('product-info-midle')}>
                                <button>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                        </div>
                        <div className={cx('left-info-bottom')}>
                            <span>TỔNG TIỀN: </span>
                            <span>20.200.000đ</span>
                        </div>
                        <div className={cx('checkout')}>
                            <Link to='/'> 
                            <div className={cx('ctn-shopping')}>
                                 TIẾP TỤC MUA SẮM
                            </div></Link>
                            <Link to='/shipping'><button className={cx('checkout-btn')}>ĐẶT HÀNG</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
