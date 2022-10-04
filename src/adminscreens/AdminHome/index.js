import React from 'react';
import classNames from 'classnames/bind';
import styles from './AdminHome.module.scss'

import AdminHeader from '../../components/adminlayout/AdminHeader/AdminHeader';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';

const cx = classNames.bind(styles)

function AdminHome() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <AdminSidebar />
                <AdminHeader />
            </div>
        </div>
    );
}

export default AdminHome;
