import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import firebase from '../../firebase/config';
import { Link, useParams } from 'react-router-dom';

import styles from './SingleProduct.module.scss';
import Loading from '../../components/Layout/Loading';
import Sidebar from './../../../src/components/Layout/Sidebar';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { v4 as uuidv4 } from 'uuid';

const cx = classNames.bind(styles);

function SingleProduct__() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { productId } = useParams();
    console.log(productId);
    const ref = firebase.firestore().collection('products').where('id', '==', `${productId}`);
    const rec = firebase.firestore().collection('cart');

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [id, setId] = useState('');
    // get products
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

    // push product to cart
    const createDoc = (newDataObj) => {
        rec.doc(newDataObj.id).set(newDataObj);
        alert('Đã thêm sản phẩm vào giỏ hàng');
    };
    useEffect(() => {
        getProducts();
    }, []);

    const renderproduct = (
        <div className={cx('inner')}>
            <div className={cx('heading')}>
                <span>THÔNG TIN SẢN PHẨM</span>
            </div>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <img src={products[0]?.image} alt="" />
                </div>
                <div className={cx('right')}>
                    <span className={cx('product-name')}>{products[0]?.name}</span>
                    <span className={cx('product-price')}>
                        {new Intl.NumberFormat('de-DE').format(products[0]?.price)} đ
                    </span>
                    <span className={cx('product-description')}>{products[0]?.desc}</span>
                    <button
                        onClick={() => {
                            setName(products[0].name);
                            setBrand(products[0].brand);
                            setImage(products[0].image);
                            setPrice(products[0].price);
                            setDesc(products[0].desc);
                            setId(products[0].id);
                            createDoc({ name, brand, image, price, desc, id });
                        }}
                    >
                        THÊM VÀO GIỎ
                    </button>
                </div>
            </div>
        </div>
    );
    return <div className={cx('wapper')}>{loading ? <Loading /> : renderproduct}</div>;
}

export default SingleProduct__;
