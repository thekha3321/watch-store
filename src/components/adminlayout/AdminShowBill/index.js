import React from 'react';
import classNames from 'classnames/bind';
import styles from './AdminShowBill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import firebase from '../../../firebase/config';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
function AdminShowBill({ bill }) {
    const billId = bill.id.slice(0, 6);
    const billsRef = firebase.firestore().collection('bills');
    const cx = classNames.bind(styles);
    const handleDeleteBill = (docx) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Bạn có chắc muốn xóa hóa đơn này không ?')) {
            try {
                billsRef.doc(docx.id).delete();
                toast.success('Successfully!');
            } catch (error) {
                toast.error('Fail!');
            }
        }
        //eslint-disable-line
    };
    const handleAcceptBill = async (status) => {
        if (status === 'Waiting') {
            try {
                await billsRef.doc(bill.id).set(_bill);
                toast.success('Successfully!');
            } catch (error) {
                toast.error('Fail!');
            }
        }
    };
    let _bill = {
        ...bill,
        status: 'Done',
    };
    return (
        <div>
            <ToastContainer />
            <div className={cx('bottom', bill.status === 'Done' ? 'done' : 'waiting')}>
                <div className={cx('product-title', 'text-upper')}>{billId}</div>
                <div className={cx('product-title')}>{bill.email}</div>
                <div className={cx('product-title')}>{bill.status ? bill.status : 'Waiting'}</div>
                <div className={cx('product-title')}>${bill.totalMoney}</div>
                <div className={cx('product-title', 'text-upper')}>{bill.orderDate}</div>
                <div className={cx('product-title')}>
                    <button className={cx('btn')}>
                        <Link to={`/bill/${bill.id}`}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </Link>
                    </button>
                    <button className={cx('btn')} onClick={() => handleAcceptBill(bill.status)}>
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
