import React from 'react';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFolderPlus,
    faFolder,
    faUser,
    faHandHoldingDollar,
    faMap,
    faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './AdminSidebar.module.scss';

function AdminSidebar() {
    const cx = className.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('heading')}>
                    <Link to="/admin/products">
                        <h1>ADMIN</h1>
                    </Link>
                </div>
                <div className={cx('container')}>
                    <Link to="/admin/products">
                        <div className={cx('content')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faFolder} />
                            Sản phẩm
                        </div>
                    </Link>
                    <Link to="/admin/addproduct">
                        <div className={cx('content')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faFolderPlus} />
                            Thêm sản phẩm
                        </div>
                    </Link>
                    <Link to="/admin/bill">
                        <div className={cx('content')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faFileInvoice} />
                            Hóa đơn
                        </div>
                    </Link>
                    <Link to="/admin/accountmanager">
                        <div className={cx('content')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                            Tài khoản
                        </div>
                    </Link>
                    <Link to="/admin/statistical">
                        <div className={cx('content')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faMap} />
                            Thống kê
                        </div>
                    </Link>
                    <Link to="/admin/promotion">
                        <div className={cx('content')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faHandHoldingDollar} />
                            Khuyến mãi
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;
