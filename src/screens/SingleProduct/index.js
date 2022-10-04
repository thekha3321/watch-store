import React from 'react';
import classNames from 'classnames/bind';
import styles from './SingleProduct.module.scss';
import Footer from '../../components/Layout/Footer';
import Sidebar from './../../../src/components/Layout/Sidebar';
import products from '../../data';

const cx = classNames.bind(styles);

function SingleProduct  ({ match }) {
    const product = products.find((p) => p.id) ;
    return (
        <>
            <Sidebar />
            <div className={cx('wapper')}>
                <div className={cx('inner')}>
                    <div className={cx('heading')}>
                        <span>THÔNG TIN SẢN PHẨM</span>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('left')}>
                            <img src={product.image} alt="" />
                        </div>
                        <div className={cx('right')}>
                            <span className={cx('product-name')}>{product.name}</span>
                            <span className={cx('product-price')}>{`${product.price} đ`}</span>
                            <span className={cx('product-description')}>{product.description}</span>
                            <button>THÊM VÀO GIỎ</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SingleProduct;
