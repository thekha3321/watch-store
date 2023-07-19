import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import firebase from '../../firebase/config';
import styles from './AdminAcountManager.module.scss';
import Header from '../../components/Layout/Header';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';
import Loading from '../../components/Layout/Loading';
import AdminShowUser from '../../components/adminlayout/AdminShowUser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminAcountManager() {
    const cx = classNames.bind(styles);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const usersRef = firebase.firestore().collection('users');
    function getUsers() {
        setLoading(true);
        usersRef.onSnapshot((querySnapShot) => {
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
            <div className={cx('heading')}>Account management</div>
            <div className={cx('content')}>
                <div className={cx('top')}>
                    <div className={cx('product-title')}>User Id</div>
                    <div className={cx('product-title')}>User name</div>
                    <div className={cx('product-title')}>Email</div>
                    <div className={cx('product-title')}>Rule</div>
                    <div className={cx('product-title')}>Actions</div>
                </div>
                {users.map((user, index) => (
                    <AdminShowUser key={user.id} toast={toast} user={user} />
                ))}
            </div>
        </div>
    );
    return (
        <>
            <Header />
            <ToastContainer />
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
