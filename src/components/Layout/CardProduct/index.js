import React from 'react';
import classnames from 'classnames/bind';
import styles from './CardProduct.module.scss';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import firebase from '../../../firebase/config';
function CardProduct({ product, index, notify }) {
    const cartRef = firebase.firestore().collection('cart');

    const cx = classnames.bind(styles);
    let _product = {
        name: product.name,
        brand: product.brand,
        image: product.image,
        price: product.price,
        desc: product.desc,
        id: product.id,
    };
    const handleBuy = async () => {
        await cartRef.doc(product.id).set(_product);
    };

    return (
        <Fragment>
            <div key={index} className={cx('product')} to={`/products/${product.id}`}>
                <div className={cx('top')}>
                    <img className="product-img" src={product.image} alt="" />
                    <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('bottom-content')}>
                        <div className={cx('star-box')}>★★★★★</div>
                        <div className={cx('product-name')}>{product.brand}</div>
                        <div className={cx('product-price-tag')}>
                            <div className={cx('product-price')}>${product.price}</div>
                            <button
                                onClick={() => {
                                    handleBuy(product);
                                    notify();
                                }}
                                className={cx('btn')}
                            >
                                <FontAwesomeIcon className={cx('icon-add-product')} icon={faCartShopping} />
                            </button>
                        </div>
                        <Link to={`/products/${product.id}`} className={cx('detail')}>
                            <span>View product</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CardProduct;
