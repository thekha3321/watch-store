import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './ShopSaling.module.scss';

import firebase from '../../../firebase/config';
import Loading from '../Loading';
import Header from '../Header';
import Sidebar from '../Sidebar';
import SlideBanner from '../SlideBanner';
import CardProduct from '../CardProduct';
import Footer from '../Footer';
const cx = classnames.bind(styles);

function ShopSaling() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    //lay db tu firebase
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
    //
    const renderProducts = (
        <div className={cx('inner')}>
            {products.map((product, index) => (
                <CardProduct product={product} index={index} />
            ))}
        </div>
    );
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <Sidebar />
                <SlideBanner />
                <header>Products</header>
                {loading ? <Loading /> : renderProducts}
                <Footer />
            </div>
        </>
    );
}

export default ShopSaling;
