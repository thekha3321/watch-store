import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminShowUser.module.scss';
import firebase from '../../../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function AdminShowUser({ user }) {
    const usersRef = firebase.firestore().collection('users');
    const cx = classNames.bind(styles);

    const handleDeleteProduct = async (user) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Bạn có chắc muốn xóa sản phẩm này không ?')) {
            await usersRef
                .doc(user.id)
                .delete()
                .catch((err) => {
                    alert(err);
                });
        }
        //eslint-disable-line
    };
    return (
        <div key={user.uid}>
            <div className={cx('bottom')}>
                <div className={cx('product-title', 'text-upper')}>{user.id}</div>
                <div className={cx('product-title')}>{user.name}</div>
                <div className={cx('product-title')}>{user.email}</div>
                <div className={cx('product-title')}>{user.rule === 0 ? 'khách hàng' : 'Quản trị viên'}</div>
                <div className={cx('product-title')}>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faLock} />
                    </button>
                    <button className={cx('btn')} onClick={() => handleDeleteProduct(user)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminShowUser;
