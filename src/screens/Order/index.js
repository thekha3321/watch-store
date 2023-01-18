import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../../firebase/config';
import Loading from '../../components/Layout/Loading';
import sytles from './Order.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/Layout/Header';
import PaypalCheckoutButton from '../../components/Layout/Paypal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Order() {
    const notify = () => toast.success('Successfully!');
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(false);
    const cx = classNames.bind(sytles);
    const cartRef = firebase.firestore().collection('cart');
    const billsRef = firebase.firestore().collection('bills');
    const name = sessionStorage.getItem('Name');
    const phone = sessionStorage.getItem('Phone');
    const addr = sessionStorage.getItem('Address');
    const [productsInLocal, setProductsInLocal] = useState([]);
    const [products, setProducts] = useState([]);
    const randomId = uuidv4().slice(0, 6);
    const date = new Date();
    const day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    const idUser = sessionStorage.getItem('Uid');

    const getProductsInLocal = () => {
        if (localStorage.getItem('AllProducts')) {
            const allProducts = localStorage.getItem('AllProducts');
            setProductsInLocal(JSON.parse(allProducts));
        }
    };
    let totalMoney = 0;
    productsInLocal.forEach((product) => {
        totalMoney += product.price;
    });
    const getProducts = () => {
        setLoading(true);
        cartRef.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items);
            setLoading(false);
        });
    };

    useEffect(() => {
        getProducts();
        getProductsInLocal();
    }, []);
    useEffect(() => {
        if (check) handlePay(1);
    }, [check]);

    let bill0 = {
        id: randomId,
        idUser: idUser,
        name: sessionStorage.getItem('Name'),
        email: sessionStorage.getItem('Email'),
        phone: sessionStorage.getItem('Phone'),
        address: sessionStorage.getItem('Address'),
        status: 'Waiting',
        orderDate: `${day}/${month}/${year}`,
        totalMoney: totalMoney + totalMoney / 10 + 20,
        paymentMethod: 0,
        allProducts: [...products],
    };

    let bill1 = {
        id: randomId,
        idUser: idUser,
        name: sessionStorage.getItem('Name'),
        email: sessionStorage.getItem('Email'),
        phone: sessionStorage.getItem('Phone'),
        address: sessionStorage.getItem('Address'),
        status: 'Waiting',
        orderDate: `${day}/${month}/${year}`,
        totalMoney: totalMoney + totalMoney / 10 + 20,
        paymentMethod: 1,
        allProducts: [...products],
    };
    const handlePay = async (props) => {
        try {
            if (props === 0) {
                await billsRef.doc(randomId).set(bill0);
                await products.forEach((product) => cartRef.doc(product.id).delete());
                localStorage.clear('Allproducts');
                notify();
            } else {
                await billsRef.doc(randomId).set(bill1);
                await products.forEach((product) => cartRef.doc(product.id).delete());
                localStorage.clear('Allproducts');
                notify();
            }
        } catch (error) {
            alert(error);
        }
    };
    const onChangeVl = (value) => {
        setCheck(value);
    };
    console.log(bill1.totalMoney);
    const renderUI = (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('order-place')}>
                    <div className={cx('place-heading')}>
                        <FontAwesomeIcon className={cx('place-heading-icon')} icon={faLocationDot} />
                        <span className={cx('text-upper', 'fz-16')}>delivery address</span>
                    </div>
                    <div className={cx('place-info')}>
                        <div className={cx('contact')}>
                            <h4>{name}</h4>
                            <p>{phone}</p>
                        </div>
                        <div className={cx('address')}>
                            <span>{addr}</span>
                        </div>
                        <Link className={cx('change')} to="/shipping">
                            <span className={cx('fz-16')}>Change</span>
                        </Link>
                    </div>
                </div>
                <div className={cx('order-bill')}>
                    <div className={cx('bill-heading')}>
                        <h3>Product</h3>
                        <div className={cx('title')}>
                            <div className={cx('heading-title')}>Price</div>
                            <div className={cx('heading-title')}>quality</div>
                            <div className={cx('heading-title')}>Total</div>
                        </div>
                    </div>
                    {productsInLocal.map((product) => (
                        <div className={cx('bill-info')}>
                            <div className={cx('product-info')}>
                                <img src={product.image} alt="" />
                                <div>{product.name}</div>
                            </div>
                            <div className={cx('title')}>
                                <span className={cx('heading-title')}>${product.price} </span>
                                <span className={cx('heading-title')}>1</span>
                                <span className={cx('heading-title')}>${product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('order')}>
                    <div className={cx('order-container')}>
                        <span>Total</span>
                        <span>$ {totalMoney}</span>
                    </div>
                    <div className={cx('order-container')}>
                        <span>VAT</span>
                        <span>$ {totalMoney / 10}</span>
                    </div>
                    <div className={cx('order-container')}>
                        <span>Transportation expenses</span>
                        <span>$ 20</span>
                    </div>
                    <div className={cx('order-container')}>
                        <span>total payable amount</span>
                        <span>$ {totalMoney + totalMoney / 10 + 20}</span>
                    </div>
                    <div className={cx('btn')}>
                        <button onClick={() => handlePay(0)} className={cx('order-btn', 'fz-18')}>
                            Order
                        </button>
                        <PaypalCheckoutButton
                            price={bill1.totalMoney}
                            check={(value) => {
                                onChangeVl(value);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <>
            <Header />
            <ToastContainer />
            {loading ? <Loading /> : renderUI}
        </>
    );
}

export default Order;
