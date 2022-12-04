import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Layout/Header';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../firebase/config';

function Cart() {
    const cx = classNames.bind(styles);
    const [products, setProducts] = useState([]);
    const cartRef = firebase.firestore().collection('cart');
    const randomId = uuidv4();
    let navigate = useNavigate();

    const getProducts = () => {
        cartRef.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items);
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

    let totalMoney = 0;
    products.map((product) => (totalMoney += product.price));

    const handleDeleteProduct = (docx) => {
        cartRef
            .doc(docx.id)
            .delete()
            .catch((err) => {
                alert(err);
            });
        //eslint-disable-line
    };
    let bill = {
        id: randomId,
        name: sessionStorage.getItem('Name'),
        email: sessionStorage.getItem('Email'),
        phone: sessionStorage.getItem('Phone'),
        address: sessionStorage.getItem('Address'),
        allProducts: [...products],
    };
    const handleCreateBill = async () => {
        if (products.length !== 0) {
            localStorage.setItem('AllProducts', JSON.stringify(bill.allProducts));
            navigate('/order');
        } else {
            alert('bạn chưa có đơn hàng');
        }
    };

    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('container')}>
                        <div className={cx('heading')}>
                            <span>Giỏ hàng</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className={cx('left')}>
                            <span className={cx('left-heading')}>
                                <div className={cx('product-info-top')}>HÌNH ẢNH</div>
                                <div className={cx('product-info-top')}>SẢN PHẨM</div>
                                <div className={cx('product-info-top')}>GIÁ</div>
                                <div className={cx('product-info-top')}>SỐ LƯỢNG</div>
                                <div className={cx('product-info-top')}>THÀNH TIỀN</div>
                                <div className={cx('product-info-top')}>XÓA</div>
                            </span>
                            {products.map((product, index) => (
                                <div key={index} className={cx('left-content')}>
                                    <div className={cx('product-info-midle')}>
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className={cx('product-info-midle', 'ta-none')}>
                                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                                    </div>
                                    <div className={cx('product-info-midle')}>
                                        <span>{new Intl.NumberFormat('de-DE').format(product.price)}đ</span>
                                    </div>
                                    <div className={cx('product-info-midle')}>1</div>
                                    <div className={cx('product-info-midle')}>
                                        <span>{new Intl.NumberFormat('de-DE').format(product.price)}đ</span>
                                    </div>
                                    <div className={cx('product-info-midle')}>
                                        <button
                                            className={cx('delete-icon')}
                                            onClick={() => {
                                                handleDeleteProduct(product);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className={cx('left-info-bottom')}>
                                <span>TỔNG TIỀN: </span>
                                <span>{`${new Intl.NumberFormat('de-DE').format(totalMoney)} đ`}</span>
                            </div>
                            <div className={cx('checkout')}>
                                <Link to="/">
                                    <div className={cx('ctn-shopping')}>TIẾP TỤC MUA SẮM</div>
                                </Link>

                                <button
                                    onClick={() => {
                                        if (firebase.auth().currentUser) {
                                            handleCreateBill();
                                            // eslint-disable-next-line no-restricted-globals
                                        } else if (confirm('bạn chưa đăng nhập, bạn có muốn đăng nhập không ?')) {
                                            navigate('/login');
                                        }
                                    }}
                                    className={cx('checkout-btn')}
                                >
                                    ĐẶT HÀNG
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
