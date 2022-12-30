import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminEditProduct.module.scss';
import firebase from '../../../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function AdminEditProduct({ product, setEditbox }) {
    const cx = classNames.bind(styles);
    const productsRef = firebase.firestore().collection('products');
    const [name, setName] = useState(product.name);
    const [brand, setBrand] = useState(product.brand);
    const [price, setPrice] = useState(product.price);
    const [image, setImage] = useState(product.image);
    const [desc, setDesc] = useState(product.desc);

    const handleEditProduct = (updtProduct) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Bạn có chắc muốn sửa sản phẩm ?')) {
            productsRef
                .doc(updtProduct.id)
                .update(updtProduct)
                .catch((err) => {
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
                                value={name}
                                id="name"
                                wrap="soft"
                                name="name"
                                type="text"
                                placeholder=""
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Thương hiệu</label>
                            <textarea
                                value={brand}
                                id="brand"
                                name="name"
                                type="text"
                                placeholder=""
                                onChange={(e) => setBrand(e.target.value)}
                            />
                            <label>Giá</label>
                            <textarea
                                value={price}
                                id="price"
                                name="name"
                                type="text"
                                onChange={(e) => setPrice(Number(e.target.value))}
                            />
                            <label>Hình ảnh</label>
                            <textarea
                                value={image}
                                id="img"
                                name="name"
                                type="text"
                                placeholder="Đường dẫn hình ảnh"
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <label>Mô tả</label>
                            <textarea
                                value={desc}
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
