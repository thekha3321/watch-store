import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminShowUser.module.scss';
import firebase from '../../../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLock, faTrash } from '@fortawesome/free-solid-svg-icons';

function AdminShowUser({ user }) {
    const ref = firebase.firestore().collection('users');

    const cx = classNames.bind(styles);
    const handleDeleteProduct = async (user) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Bạn có chắc muốn xóa sản phẩm này không ?')) {
            await ref
                .doc(user.uid)
                .delete()
                .catch((err) => {
                    alert(err);
                });

            firebase
                .auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then(() => {
                    const userInFirebaseAuth = firebase.auth().currentUser;
                    userInFirebaseAuth.delete(user.email, user.password);
                    console.log(user.email);
                });
        }
        //eslint-disable-line
    };
    return (
        <div key={user.uid}>
            <div className={cx('bottom')}>
                <div className={cx('product-title')}>{user.uid}</div>
                <div className={cx('product-title')}>{user.name}</div>
                <div className={cx('product-title')}>{user.email}</div>
                <div className={cx('product-title')}>{user.rule}</div>
                <div className={cx('product-title')}>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faCircleInfo} />
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
