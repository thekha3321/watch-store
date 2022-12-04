import React from 'react';
import classNames from 'classnames/bind';
import styles from './AdminShowBill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import firebase from '../../../firebase/config';

function AdminShowBill({ bill }) {
    const billId = bill.id.slice(0, 4);
    const billsRef = firebase.firestore().collection('bills');
    const cx = classNames.bind(styles);
    const handleDeleteBill = (docx) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Bạn có chắc muốn xóa hóa đơn này không ?')) {
            billsRef
                .doc(docx.id)
                .delete()
                .catch((err) => {
                    alert(err);
                });
        }
        //eslint-disable-line
    };
    return (
        <div>
            <div className={cx('bottom')}>
                <div className={cx('product-title', 'text-upper')}>{billId}</div>
                <div className={cx('product-title')}>{bill.name}</div>
                <div className={cx('product-title')}>{bill.email}</div>
                <div className={cx('product-title')}>{bill.orderDate}</div>
                <div className={cx('product-title')}>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faLock} />
                    </button>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteBill(bill)} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminShowBill;
