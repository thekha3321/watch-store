import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import firebase from '../../firebase/config';

import sytles from './Order.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/Layout/Header';

function Order() {
    const cx = classNames.bind(sytles);
    const cartRef = firebase.firestore().collection('cart');
    const billsRef = firebase.firestore().collection('bills');

    const name = sessionStorage.getItem('Name');
    const phone = sessionStorage.getItem('Phone');
    const addr = sessionStorage.getItem('Address');

    const [productsInLocal, setProductsInLocal] = useState([]);
    const [products, setProducts] = useState([]);
    const randomId = uuidv4().slice(0, 5);
    const date = new Date();
    const day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    const getProductsInLocal = () => {
        if (localStorage.getItem('AllProducts')) {
            const allProducts = localStorage.getItem('AllProducts');
            setProductsInLocal(JSON.parse(allProducts));
        }
    };
    let totalMoney = 0;
    productsInLocal.forEach((product) => {
        totalMoney += product.price;
    });
    const getProducts = () => {
        cartRef.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items);
        });
    };

    useEffect(() => {
        getProducts();
        getProductsInLocal();
    }, []);

    let bill = {
        id: randomId,
        name: sessionStorage.getItem('Name'),
        email: sessionStorage.getItem('Email'),
        phone: sessionStorage.getItem('Phone'),
        address: sessionStorage.getItem('Address'),
        orderDate: `${day}/${month}/${year}`,
        totalMoney: totalMoney + 30000,
        allProducts: [...products],
    };

    const handlePay = async () => {
        await billsRef.doc(randomId).set(bill);
        await products.forEach((product) => cartRef.doc(product.id).delete());
        localStorage.clear('Allproducts');
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
                                <h4>{name}</h4>
                                <p>{phone}</p>
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
                        {productsInLocal.map((product) => (
                            <div className={cx('bill-info')}>
                                <div className={cx('product-info')}>
                                    <img src={product.image} alt="" />
                                    <div>{product.name}</div>
                                </div>
                                <div className={cx('title')}>
                                    <span className={cx('heading-title')}>{`${new Intl.NumberFormat('de-DE').format(
                                        product.price,
                                    )} đ`}</span>
                                    <span className={cx('heading-title')}>1</span>
                                    <span className={cx('heading-title')}>{`${new Intl.NumberFormat('de-DE').format(
                                        product.price,
                                    )} đ`}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('order')}>
                        <div className={cx('order-container')}>
                            <span>Tổng tiền hàng</span>
                            <span>{`${new Intl.NumberFormat('de-DE').format(totalMoney)} đ`}</span>
                        </div>
                        <div className={cx('order-container')}>
                            <span>Phí vận chuyển</span>
                            <span>30.000</span>
                        </div>
                        <div className={cx('order-container')}>
                            <span>Tổng thanh toán</span>
                            <span>{`${new Intl.NumberFormat('de-DE').format(totalMoney + 30000)} đ`}</span>
                        </div>
                        <div className={cx('btn')}>
                            <button onClick={handlePay} className={cx('order-btn')}>
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
