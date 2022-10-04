import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';

import styles from './AdminAddproduct.module.scss';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';
import AdminHeader from '../../components/adminlayout/AdminHeader/AdminHeader';
import firebase from './../../firebase/config';

const cx = classNames.bind(styles);
const ref = firebase.firestore().collection('products');

function AdminAddProduct() {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');

    const createDoc = (newDataObj) => {
        alert('Thêm sản phẩm thành công');
        ref.doc(newDataObj.id)
            .set(newDataObj)
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <AdminSidebar />
                <div className={cx('container')}>
                    <AdminHeader />
                    <div className={cx('content')}>
                        <div className={cx('heading')}>Thêm sản phẩm</div>
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
                            <textarea id="price" name="name" type="text" onChange={(e) => setPrice(Number(e.target.value))} />
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
                                    createDoc({ name, brand, price, image, desc, id: uuidv4() });
                                    document.getElementById('name').value = '';
                                    document.getElementById('brand').value = '';
                                    document.getElementById('price').value = '';
                                    document.getElementById('img').value = '';
                                    document.getElementById('desc').value = '';
                                }}
                            >
                                Hoàn thành
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAddProduct;
