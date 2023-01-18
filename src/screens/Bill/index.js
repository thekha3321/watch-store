import React from 'react';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import classNames from 'classnames/bind';
import styles from './Bill.module.scss';
import firebase from '../../firebase/config';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Layout/Loading';

function Bill() {
    const cx = classNames.bind(styles);
    const { billId } = useParams();
    const [bill, setBill] = useState();
    const [loading, setLoading] = useState(false);

    const allProducts = bill?.allProducts;

    const billRef = firebase.firestore().collection('bills').where('id', '==', billId);

    async function getBill() {
        setLoading(true);
        await billRef.onSnapshot((querySnapShot) => {
            querySnapShot.forEach((doc) => {
                // items.push(doc.data());
                setBill(doc.data());
            });
            setLoading(false);
        });
    }
    let totalMoney = 0;
    allProducts?.forEach((product) => {
        totalMoney += product.price;
    });
    useEffect(() => {
        getBill();
    }, []);
    console.log(bill);
    const renderUI = (
        <div className={cx('container')}>
            <div className="content">
                <header className={cx('title')}>Bill {bill?.id}</header>
                <div>
                    <p className={cx()}>
                        Name: <span className={cx('fz-16', 'fw-600')}>{bill?.name}</span>
                    </p>
                    <p className={cx()}>
                        Order Date: <span className={cx('fz-16', 'fw-600')}>{bill?.orderDate}</span>
                    </p>
                    <p className={cx()}>
                        Payment Method:{' '}
                        <span className={cx('fz-16', 'fw-600')}>
                            {bill?.paymentMethod === 0 ? 'offline/unpaid' : 'online/paid'}
                        </span>
                    </p>
                    <p className={cx()}>
                        Status: <span className={cx('fz-16', 'fw-600')}>{bill?.status}</span>
                    </p>
                </div>
                <div className={cx('left')}>
                    <div className={cx('left-heading')}>
                        <div className={cx('product-info-top', 'text-upper')}>Image</div>
                        <div className={cx('product-info-top', 'text-upper')}>Product name</div>
                        <div className={cx('product-info-top', 'text-upper')}>Price</div>
                        <div className={cx('product-info-top', 'text-upper')}>quality</div>
                        <div className={cx('product-info-top', 'text-upper')}>Amount</div>
                    </div>
                    {bill &&
                        allProducts.map((product, index) => (
                            <div key={index} className={cx('left-content')}>
                                <div className={cx('product-info-midle')}>
                                    <img src={product?.image} alt="" />
                                </div>
                                <div className={cx('product-info-midle', 'ta-none')}>{product?.name}</div>
                                <div className={cx('product-info-midle')}>
                                    <span className={cx('fz-16')}>${product?.price}</span>
                                </div>
                                <div className={cx('product-info-midle')}>1</div>
                                <div className={cx('product-info-midle')}>
                                    <span className={cx('fz-16')}>${product?.price}</span>
                                </div>
                            </div>
                        ))}
                </div>
                <div className={cx('total-modal')}>
                    <div className={cx('total-title')}>
                        <span>Total</span>
                        <span>${totalMoney}</span>
                    </div>
                    <div className={cx('total-title')}>
                        <span>VAT</span>
                        <span>${totalMoney / 10}</span>
                    </div>
                    <div className={cx('total-title')}>
                        <span>Transportation expenses</span>
                        <span>$20</span>
                    </div>
                    <div className={cx('total-title')}>
                        <span>Total payable amount</span>
                        <span>${bill?.totalMoney}</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={cx('wrapper')}>
            <Header />
            {loading ? <Loading /> : renderUI}
            <Footer />
        </div>
    );
}

export default Bill;
