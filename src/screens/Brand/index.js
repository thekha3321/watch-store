import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './Brand.module.scss';
import { useParams } from 'react-router-dom';

import firebase from '../../firebase/config';
import Loading from '../../components/Layout/Loading';
import Sidebar from '../../components/Layout/Sidebar';
import Header from '../../components/Layout/Header';
import SlideBanner from '../../components/Layout/SlideBanner';
import CardProduct from '../../components/Layout/CardProduct';

function Brand() {
    const cx = classnames.bind(styles);
    //lay db tu firebase
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { productBrand } = useParams();
    const productsRef = firebase.firestore().collection('products').where('brand', '==', `${productBrand}`);
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
    }, [productBrand]);

    const renderProducts = (
        <>
            <h3>Thương hiệu {productBrand}</h3>
            <div className={cx('inner')}>
                {products.map((product, index) => (
                    <CardProduct key={index} product={product} index={index} />
                ))}
            </div>
        </>
    );

    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <Sidebar />
                <SlideBanner />
                {loading ? <Loading /> : renderProducts}
            </div>
        </>
    );
}

export default Brand;
