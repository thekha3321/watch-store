import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './ShopSection.module.scss';
import { Link } from 'react-router-dom';

import firebase from '../../../firebase/config';
import Loading from '../../Layout/Loading';
const cx = classnames.bind(styles);

function ShopSection() {
    //lay db tu firebase
    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(false)
    const ref = firebase.firestore().collection('products')

    function getProducts () {
        setLoading(true)
        ref.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items)
            setLoading(false)
        })
    }
    useEffect(() =>{
        getProducts();
    }, [])
    const renderProducts = (
        <div className={cx('inner')}>
                {products.map((product, index) => (
                    <Link key={index} className={cx('product')} to={`/products/${product.id}`}>
                        <div className={cx('top')} >
                            <img className="product-img" src={product.image} alt="" />
                            <div className={cx('pay')}></div>
                        </div>
                        <div className={cx('bottom')}>
                            <span className={cx('product-name')}>{product.name}</span>
                            <div className={cx('product-price')}>{`${new Intl.NumberFormat('de-DE').format(product.price)} đ`}</div>
                        </div>
                    </Link>
                ))}
            </div>

    ) 
    

    return (
        <div className={cx('wrapper')}>
            <header>sản phẩm bán chạy</header>
            {loading ? <Loading/> : renderProducts}
        </div>
    );
}

export default ShopSection;
