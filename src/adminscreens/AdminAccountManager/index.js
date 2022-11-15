import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import firebase from '../../firebase/config';
import styles from './AdminAcountManager.module.scss';
import Header from '../../components/Layout/Header';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';
import AdminHeader from '../../components/adminlayout/AdminHeader/AdminHeader';
import AdminShowProducts from '../../components/adminlayout/AdminShowProducts';
import Loading from '../../components/Layout/Loading';
import AdminShowUser from '../../components/adminlayout/AdminShowUser';

function AdminAcountManager() {
    const cx = classNames.bind(styles);

    const ref = firebase.firestore().collection('users');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    function getUsers() {
        setLoading(true);
        ref.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setUsers(items);
            setLoading(false);
        });
    }
    useEffect(() => {
        getUsers();
    }, []);
    const renderUsers = (
        <div className={cx('product-info')}>
            <div className={cx('heading')}>Quản lý tài khoản</div>
            <div className={cx('content')}>
                <div className={cx('top')}>
                    <div className={cx('product-title')}>Mã người dùng </div>
                    <div className={cx('product-title')}>Tên người dùng</div>
                    <div className={cx('product-title')}>Email</div>
                    <div className={cx('product-title')}>Vai trò</div>
                    <div className={cx('product-title')}>hành động</div>
                </div>
                {users.map((user) => (
                    <AdminShowUser user={user} />
                ))}
            </div>
        </div>
    );
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <AdminSidebar />
                    <div className={cx('container')}>{loading ? <Loading /> : renderUsers}</div>
                </div>
            </div>
        </>
    );
}

export default AdminAcountManager;
