import React from 'react';
import classNames from 'classnames/bind';
import styles from './AdminShowBill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faCheckCircle,
    faClose,
    faInfo,
    faInfoCircle,
    faLock,
    faPenToSquare,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import firebase from '../../../firebase/config';

function AdminShowBill({ bill }) {
    const billId = bill.id.slice(0, 6);
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
    const handleAcceptBill = async () => {
        await billsRef.doc(bill.id).set(_bill);
        alert('Chấp nhận đơn thành công !');
    };
    let _bill = {
        ...bill,
        status: 'Done',
    };
    return (
        <div>
            <div className={cx('bottom')}>
                <div className={cx('product-title', 'text-upper')}>{billId}</div>
                <div className={cx('product-title')}>{bill.email}</div>
                <div className={cx('product-title')}>{bill.status ? bill.status : 'Waiting'}</div>
                <div className={cx('product-title')}>{bill.phone}</div>
                <div className={cx('product-title', 'text-upper')}>{bill.orderDate}</div>
                <div className={cx('product-title')}>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </button>
                    <button className={cx('btn')} onClick={handleAcceptBill}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faClose} onClick={() => handleDeleteBill(bill)} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminShowBill;
