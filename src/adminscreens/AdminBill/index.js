import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminBill.module.scss';
import firebase from '../../firebase/config';
import Header from '../../components/Layout/Header';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';
import AdminShowBill from '../../components/adminlayout/AdminShowBill';

function AdminBill() {
    const cx = classNames.bind(styles);
    const billsRef = firebase.firestore().collection('bills');
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState([]);
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
                                    <div className={cx('product-title')}>Invoice id</div>
                                    <div className={cx('product-title')}>User name</div>
                                    <div className={cx('product-title')}>Email</div>
                                    <div className={cx('product-title')}>Phone</div>
                                    <div className={cx('product-title')}>Date</div>
                                    <div className={cx('product-title')}>Actions</div>
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
