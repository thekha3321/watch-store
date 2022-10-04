import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminShowProduct.module.scss';
import AdminEditProduct from '../AdminEditProduct';
import firebase from '../../../firebase/config';

const cx = classNames.bind(styles);
const ref = firebase.firestore().collection('products');

function AdminShowProducts({ product }) {
    const [editbox, setEditbox] = useState(false);

    const handleDeleteProduct = (docx) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Bạn có chắc muốn xóa sản phẩm này không ?")){
            ref.doc(docx.id)
                .delete()
                .catch((err) => {
                    alert(err);
                    console.log(err);
                });
        }
        //eslint-disable-line
      
    };

    return (
        <div>
            <div key={product.id} className={cx('bottom')}>
                <div className={cx('product-title')}>
                    <img src={product.image} alt="" />
                </div>
                <div className={cx('product-title')}>{product.name}</div>
                <div className={cx('product-title')}>{new Intl.NumberFormat('de-DE').format(product.price)} đ</div>
                <div className={cx('product-title')}>
                    <button className={cx('btn')} onClick={() => setEditbox(true)}>
                        sửa
                    </button>
                    <button className={cx('btn')} onClick={() => handleDeleteProduct(product)}>
                        xóa
                    </button>
                </div>
                {editbox === true && <AdminEditProduct product={product} setEditbox={setEditbox} />}
            </div>
        </div>
    );
}

export default AdminShowProducts;
