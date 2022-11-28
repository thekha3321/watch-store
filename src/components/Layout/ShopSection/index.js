import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './ShopSection.module.scss';
import { Link } from 'react-router-dom';

import firebase from '../../../firebase/config';
import Loading from '../../Layout/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
const cx = classnames.bind(styles);

function ShopSection() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const ref = firebase.firestore().collection('products');
    const iconHearts = document.querySelectorAll('.ShopSection_icon-heart__6Vr0r');

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
    useEffect(() => {
        getProducts();
    }, []);
    const renderProducts = (
        <div className={cx('inner')}>
            {products.map((product, index) => (
                <div key={index} className={cx('product')} to={`/products/${product.id}`}>
                    <img className="product-img" src={product.image} alt="" />
                    <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                    <div className={cx('bottom')}>
                        <span className={cx('product-name')}>{product.name}</span>
                        <div className={cx('product-price')}>{`${new Intl.NumberFormat('de-DE').format(
                            product.price,
                        )} đ`}</div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className={cx('wrapper')}>
            <header>sản phẩm bán chạy</header>
            {loading ? <Loading /> : renderProducts}
        </div>
    );
}

export default ShopSection;
