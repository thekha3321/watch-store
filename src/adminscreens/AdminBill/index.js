import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminBill.module.scss';
import firebase from '../../firebase/config';
import Header from '../../components/Layout/Header';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';
import AdminShowBill from '../../components/adminlayout/AdminShowBill';

function AdminBill() {
    const cx = classNames.bind(styles);
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState([]);

    const billsRef = firebase.firestore().collection('bills');
    function getBills() {
        setLoading(true);
        billsRef.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setBills(items);
            setLoading(false);
        });
    }
    useEffect(() => {
        getBills();
    }, []);

    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <AdminSidebar />
                    <div className={cx('container')}>
                        <div className={cx('product-info')}>
                            <div className={cx('heading')}>invoices management</div>
                            <div className={cx('content')}>
                                <div className={cx('top')}>
                                    <div className={cx('product-title', 'fw-600')}>Invoice id</div>
                                    <div className={cx('product-title', 'fw-600')}>Email</div>
                                    <div className={cx('product-title', 'fw-600')}>Status</div>
                                    <div className={cx('product-title', 'fw-600')}>Total</div>
                                    <div className={cx('product-title', 'fw-600')}>Date</div>
                                    <div className={cx('product-title', 'fw-600')}>Actions</div>
                                </div>
                                {bills.map((bill) => (
                                    <AdminShowBill bill={bill} key={bill.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminBill;
