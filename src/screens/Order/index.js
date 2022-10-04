import React from 'react';
import classNames from 'classnames/bind';
import sytles from './Order.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(sytles);

function Order() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('order-place')}>
                    <div className={cx('place-heading')}>
                        <FontAwesomeIcon className={cx('place-heading-icon')} icon={faLocationDot} />
                        <span>Địa chỉ nhận hàng</span>
                    </div>
                    <div className={cx('address')}>
                        <h4>Đoàn Thế Kha 0325564885</h4>
                        <p>213 đường ABC Thành phố XYZ</p>
                        <Link className={cx('change')} to="/shipping">
                            Thay đổi
                        </Link>
                    </div>
                </div>
                <div className={cx('order-bill')}>
                    <div className={cx('bill-heading')}>
                        <h3>Sản phẩm</h3>
                        <div className={cx('title')}>
                            <div className={cx('heading-title')}>Đơn giá</div>
                            <div className={cx('heading-title')}>Số lượng</div>
                            <div className={cx('heading-title')}>Thành Tiền</div>
                        </div>
                    </div>
                    <div className={cx('bill-info')}>
                        <div className={cx('product-info')}>
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2017/07/AE-1200WHD-1AVDF.jpg" alt="" />
                            <div>Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại</div>
                        </div>
                        <div className={cx('title')}>
                            <span className={cx('heading-title')}>1.300.000</span>
                            <span className={cx('heading-title')}>1</span>
                            <span className={cx('heading-title')}>1.300.000</span>
                        </div>
                    </div>
                </div>
                <div className={cx('order')}>
                    <div className={cx('order-container')}>
                        <span>Tổng tiền hàng</span>
                        <span>1.300.000</span>
                    </div>
                    <div className={cx('order-container')}>
                        <span>Phí vận chuyển</span>
                        <span>30.000</span>
                    </div>
                    <div className={cx('order-container')}>
                        <span>Tổng thanh toán</span>
                        <span>1.330.000</span>
                    </div>
                    <div className={cx('btn')}>
                        <button className={cx('order-btn')}>Đặt hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;