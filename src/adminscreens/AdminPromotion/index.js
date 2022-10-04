import React from 'react';
import classNames from 'classnames/bind';
import styles from './AdminPromotion.module.scss';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';
import AdminHeader from '../../components/adminlayout/AdminHeader/AdminHeader';

const cx = classNames.bind(styles)

function AdminPromotion() {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('inner')}>
          <AdminSidebar/>
          <div className={cx('container')}>
            <AdminHeader/>
            
          </div>
      </div>
    </div>
  )
}

export default AdminPromotion;
