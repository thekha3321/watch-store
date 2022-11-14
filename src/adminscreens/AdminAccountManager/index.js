import React from 'react';
import classNames from 'classnames/bind';
import styles from './AdminAcountManager.module.scss';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';
import AdminHeader from '../../components/adminlayout/AdminHeader/AdminHeader';
import Header from '../../components/Layout/Header';

const cx = classNames.bind(styles);

function AdminAcountManager() {
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <AdminSidebar />
                    <div className={cx('container')}></div>
                </div>
            </div>
        </>
    );
}

export default AdminAcountManager;
