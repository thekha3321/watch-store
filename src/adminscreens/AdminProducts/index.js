import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminProducts.module.scss';
import AdminSibar from './../../components/adminlayout/AdminSidebar';
import firebase from '../../firebase/config';
import AdminShowProducts from '../../components/adminlayout/AdminShowProducts';
import Loading from '../../components/Layout/Loading';
import Header from '../../components/Layout/Header';

function AdminProducts() {
    const cx = classNames.bind(styles);
    const productsRef = firebase.firestore().collection('products');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

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
        <div className={cx('product-info')}>
            <div className={cx('heading')}>All products</div>
            <div className={cx('content')}>
                <div className={cx('top')}>
                    <div className={cx('product-title')}>Image</div>
                    <div className={cx('product-title')}>Product Name</div>
                    <div className={cx('product-title')}>Price</div>
                    <div className={cx('product-title')}>Actions</div>
                </div>
                {products.map((product) => (
                    <AdminShowProducts product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <AdminSibar />
                    <div className={cx('container')}>{loading ? <Loading /> : renderProducts}</div>
                </div>
            </div>
        </>
    );
}
export default AdminProducts;
