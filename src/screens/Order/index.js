import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import firebase from '../../firebase/config';

import sytles from './Order.module.scss';
import Header from '../../components/Layout/Header';

const cx = classNames.bind(sytles);
const ref = firebase.firestore().collection('cart');

console.log(ref);
function Order() {
    const name = localStorage.getItem('Name');
    const phone = localStorage.getItem('Phone');
    const addr = localStorage.getItem('Address');

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    function getProducts() {
        setLoading(true);
        ref.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items);
            setLoading(false);
        });
    }
    let allId = [];
    products.map((product) => {
        allId.push(product.id);
    });
    console.log(allId);
    useEffect(() => {
        getProducts();
    }, []);
    const handleDeleteProduct = (allId) => {
        // eslint-disable-next-line no-restricted-globals
        ref.doc()
            .delete()
            .catch((err) => {
                alert(err);
                console.log(err);
            });
        alert('Đặt hàng thành công!');
        //eslint-disable-line
    };
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('order-place')}>
                        <div className={cx('place-heading')}>
                            <FontAwesomeIcon className={cx('place-heading-icon')} icon={faLocationDot} />
                            <span>Địa chỉ nhận hàng</span>
                        </div>
                        <div className={cx('place-info')}>
                            <div className={cx('contact')}>
                                <h4>
                                    {name} {phone}
                                </h4>
                            </div>
                            <div className={cx('address')}>
                                <span>{addr}</span>
                            </div>
                            <Link className={cx('change')} to="/shipping">
                                <span>Thay đổi</span>
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
                                <img
                                    src="https://cdn3.dhht.vn/wp-content/uploads/2017/07/AE-1200WHD-1AVDF.jpg"
                                    alt=""
                                />
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
                            <button onClick={() => handleDeleteProduct(allId)} className={cx('order-btn')}>
                                Đặt hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Order;
