import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminShowProduct.module.scss';
import AdminEditProduct from '../AdminEditProduct';
import firebase from '../../../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminShowProducts({ product }) {
    const cx = classNames.bind(styles);
    const productsRef = firebase.firestore().collection('products');
    const [editbox, setEditbox] = useState(false);

    const handleDeleteProduct = async (docx) => {
        // eslint-disable-next-line no-restricted-globals
        if (await confirm('Are you sure ?')) {
            try {
                productsRef.doc(docx.id).delete();
                toast.success('Successfully!');
            } catch (error) {
                toast.error('Fail!');
            }
        }
        //eslint-disable-line
    };

    return (
        <div>
            <ToastContainer />

            <div key={product.id} className={cx('bottom')}>
                <div className={cx('product-title')}>
                    <img src={product.image} alt="" />
                </div>
                <div className={cx('product-title')}>{product.name}</div>
                <div className={cx('product-title')}>${product.price}</div>
                <div className={cx('product-title')}>
                    <button className={cx('btn')} onClick={() => setEditbox(!editbox)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button
                        className={cx('btn')}
                        onClick={() => {
                            handleDeleteProduct(product);
                        }}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
                {editbox === true && <AdminEditProduct product={product} setEditbox={setEditbox} />}
            </div>
        </div>
    );
}

export default AdminShowProducts;
