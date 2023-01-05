import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Layout/Header';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../firebase/config';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cart() {
    const cx = classNames.bind(styles);
    const [products, setProducts] = useState([]);
    const cartRef = firebase.firestore().collection('cart');
    const randomId = uuidv4();
    let navigate = useNavigate();
    const [small, setSmall] = useState(false);

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
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => setSmall(window.pageYOffset > 300));
        }
    }, []);

    let totalMoney = 0;
    products.map((product) => (totalMoney += product.price));

    const handleDeleteProduct = (docx) => {
        try {
            cartRef.doc(docx.id).delete();
            toast.success('Successfully!');
        } catch (error) {
            toast.error('Fail!');
        }
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
            alert("You don't have an order");
        }
    };

    return (
        <>
            <Header />
            <ToastContainer />
            <div className={cx('wrapper', `${small ? 'paddingHeader' : ''}`)}>
                <div className={cx('inner')}>
                    <div className={cx('container')}>
                        <div className={cx('heading')}>
                            <span>Cart</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className={cx('left')}>
                            <div className={cx('left-heading')}>
                                <div className={cx('product-info-top', 'text-upper')}>Image</div>
                                <div className={cx('product-info-top', 'text-upper')}>Product name</div>
                                <div className={cx('product-info-top', 'text-upper')}>Price</div>
                                <div className={cx('product-info-top', 'text-upper')}>quality</div>
                                <div className={cx('product-info-top', 'text-upper')}>Amount</div>
                                <div className={cx('product-info-top', 'text-upper')}>Delete</div>
                            </div>
                            {products.map((product, index) => (
                                <div key={index} className={cx('left-content')}>
                                    <div className={cx('product-info-midle')}>
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className={cx('product-info-midle', 'ta-none')}>
                                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                                    </div>
                                    <div className={cx('product-info-midle')}>
                                        <span className={cx('fz-16')}>${product.price}</span>
                                    </div>
                                    <div className={cx('product-info-midle')}>1</div>
                                    <div className={cx('product-info-midle')}>
                                        <span className={cx('fz-16')}>${product.price}</span>
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
                                <span className={cx('text-upper')}>Total: </span>
                                <span className={cx('fz-16')}>${totalMoney}</span>
                            </div>
                            <div className={cx('checkout')}>
                                <Link to="/">
                                    <div className={cx('ctn-shopping')}>Continue Shopping</div>
                                </Link>

                                <button
                                    onClick={() => {
                                        if (sessionStorage.getItem('Name')) {
                                            handleCreateBill();
                                            // eslint-disable-next-line no-restricted-globals
                                        } else if (confirm('you are not logged in, would you like to login ?')) {
                                            navigate('/login');
                                        }
                                    }}
                                    className={cx('checkout-btn', 'text-upper')}
                                >
                                    Buy
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
