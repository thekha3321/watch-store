import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './ShopSaling.module.scss';
import { Link } from 'react-router-dom';

import firebase from '../../../firebase/config';
import Loading from '../Loading';
import Header from '../Header';
import Sidebar from '../Sidebar';
import SlideBanner from '../SlideBanner';
const cx = classnames.bind(styles);

function ShopSaling() {
    //lay db tu firebase
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const productsRef = firebase.firestore().collection('products');

    function getProducts() {
        setLoading(true);
        productsRef.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items);
            setLoading(false);
        });
    }
    useEffect(() => {
        getProducts();
    }, []);
    const renderProducts = (
        <div className={cx('inner')}>
            {products.map((product, index) => (
                <Link key={index} className={cx('product')} to={`/products/${product.id}`}>
                    <div className={cx('top')}>
                        <img className="product-img" src={product.image} alt="" />
                        <div className={cx('sale')}>Giãm giá 20%</div>
                    </div>
                    <div className={cx('bottom')}>
                        <span className={cx('product-name')}>{product.name}</span>
                        <div className={cx('product-price')}>{`${new Intl.NumberFormat('de-DE').format(
                            product.price,
                        )} đ`}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <Sidebar />
                <SlideBanner />
                <header>sản phẩm khuyến mãi</header>
                {loading ? <Loading /> : renderProducts}
            </div>
        </>
    );
}

export default ShopSaling;
