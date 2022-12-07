import React from 'react';
import classNames from 'classnames/bind';
import styles from './AdminPromotion.module.scss';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';
import Header from '../../components/Layout/Header';

function AdminPromotion() {
    const cx = classNames.bind(styles);
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

export default AdminPromotion;
