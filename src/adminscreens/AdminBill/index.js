import React from 'react';
import classNames from 'classnames/bind';
import styles from './AdminBill.module.scss';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';
import AdminHeader from '../../components/adminlayout/AdminHeader/AdminHeader';
import Header from '../../components/Layout/Header';

const cx = classNames.bind(styles);

function AdminBill() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <AdminSidebar />
                <div className={cx('container')}>
                    <Header />
                </div>
            </div>
        </div>
    );
}

export default AdminBill;
