import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminEditProduct.module.scss';
import firebase from '../../../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const ref = firebase.firestore().collection('products');

function AdminEditProduct({ product, setEditbox }) {
    const [name, setName] = useState('ưdaaaaaaaaa');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');

    const handleEditProduct = (updtProduct) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Bạn có chắc muốn sửa sản phẩm ?')) {
            ref.doc(updtProduct.id)
                .update(updtProduct)
                .catch((err) => {
                    alert(err);
                    console.log(err);
                });
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('heading')}>Sửa sản phẩm</div>
                        <div className={cx('heading-icon')}>
                            <button onClick={() => setEditbox(false)}>
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                        <div className={cx('add-info')}>
                            <label>Tên sản phẩm</label>
                            <textarea
                                id="name"
                                wrap="soft"
                                name="name"
                                type="text"
                                placeholder=""
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Thương hiệu</label>
                            <textarea
                                id="brand"
                                name="name"
                                type="text"
                                placeholder=""
                                onChange={(e) => setBrand(e.target.value)}
                            />
                            <label>Giá</label>
                            <textarea
                                id="price"
                                name="name"
                                type="text"
                                onChange={(e) => setPrice(Number(e.target.value))}
                            />
                            <label>Hình ảnh</label>
                            <textarea
                                id="img"
                                name="name"
                                type="text"
                                placeholder="Đường dẫn hình ảnh"
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <label>Mô tả</label>
                            <textarea
                                id="desc"
                                name="desc"
                                type="text"
                                placeholder=""
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </div>
                        <div className={cx('btn')}>
                            <button
                                onClick={() => {
                                    handleEditProduct({
                                        name: name,
                                        brand: brand,
                                        price: price,
                                        image: image,
                                        desc: desc,
                                        id: product.id,
                                    });
                                    setEditbox(false);
                                }}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminEditProduct;
