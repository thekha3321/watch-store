import React from 'react';
import classnames from 'classnames/bind';
import styles from './ShopSection.module.scss';
import products from '../../../data';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function ShopSection() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {products.map((product, index) => (
                    <Link className={cx('product')} to={`products/${product.id}`}>
                        <div className={cx('top')} key={index}>
                            <img className="product-img" src={product.image} alt="" />
                        </div>
                        <div className={cx('bottom')}>
                            <span className={cx('product-name')}>
                                {product.name}
                            </span>
                            <div className={cx('product-price')}>{`${product.price} đ`}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ShopSection;
