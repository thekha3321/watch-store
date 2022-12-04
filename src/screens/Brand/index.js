import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './Brand.module.scss';
import { Link, useParams } from 'react-router-dom';

import firebase from '../../firebase/config';
import Loading from '../../components/Layout/Loading';
import Sidebar from '../../components/Layout/Sidebar';
import Header from '../../components/Layout/Header';
import SlideBanner from '../../components/Layout/SlideBanner';

function Brand() {
    const cx = classnames.bind(styles);
    //lay db tu firebase
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { productBrand } = useParams();
    console.log(productBrand);
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
    }, []);
    const renderProducts = (
        <div className={cx('inner')}>
            {products.map((product, index) => (
                <Link key={index} className={cx('product')} to={`/products/${product.id}`}>
                    <div className={cx('top')}>
                        <img className="product-img" src={product.image} alt="" />
                        <div className={cx('pay')}></div>
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
                {loading ? <Loading /> : renderProducts}
            </div>
        </>
    );
}

export default Brand;
