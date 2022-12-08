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
                            <div className={cx('heading')}>Quản lý Hóa Đơn</div>
                            <div className={cx('content')}>
                                <div className={cx('top')}>
                                    <div className={cx('product-title')}>Mã hóa Đơn </div>
                                    <div className={cx('product-title')}>Tên người dùng</div>
                                    <div className={cx('product-title')}>Email</div>
                                    <div className={cx('product-title')}>Vai trò</div>
                                    <div className={cx('product-title')}>hành động</div>
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
