import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import firebase from '../../firebase/config';
import { useParams } from 'react-router-dom';

import styles from './SingleProduct.module.scss';
import Loading from '../../components/Layout/Loading';

const cx = classNames.bind(styles);

function SingleProduct__() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { productId } = useParams();
    const productsRef = firebase.firestore().collection('products').where('id', '==', `${productId}`);
    const cartRef = firebase.firestore().collection('cart');

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [id, setId] = useState('');
    // get products
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

    // push product to cart
    const createDoc = (props) => {
        cartRef.doc(props.id).set(props);
        alert('Đã thêm sản phẩm vào giỏ hàng');
    };
    useEffect(() => {
        getProducts();
    }, []);

    const renderproduct = (
        <div className={cx('inner')}>
            <div className={cx('heading')}>
                <span>products information</span>
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
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
    return <div className={cx('wapper')}>{loading ? <Loading /> : renderproduct}</div>;
}

export default SingleProduct__;
