import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import classNames from 'classnames/bind';
import styles from './AdminAddproduct.module.scss';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';
import firebase from './../../firebase/config';
import Header from '../../components/Layout/Header';

function AdminAddProduct() {
    const cx = classNames.bind(styles);
    const productsRef = firebase.firestore().collection('products');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');

    const createDoc = (newDataObj) => {
        productsRef.doc(newDataObj.id).set(newDataObj);
        alert('Thêm sản phẩm thành công');
    };
    let contentEvo = [];
    return (
        <>
            {' '}
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <AdminSidebar />
                    <div className={cx('container')}>
                        <div className={cx('content')}>
                            <div className={cx('heading')}>Create Product</div>
                            <div className={cx('add-info')}>
                                <label>Product name</label>
                                <textarea
                                    id="name"
                                    wrap="soft"
                                    name="name"
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label>Brand</label>
                                <textarea
                                    id="brand"
                                    name="name"
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                                <label>Price</label>
                                <textarea
                                    id="price"
                                    name="name"
                                    type="text"
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                />
                                <label>Image</label>
                                <textarea
                                    id="img"
                                    name="name"
                                    type="text"
                                    placeholder="Link"
                                    onChange={(e) => setImage(e.target.value)}
                                />
                                <label>Description</label>
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
                                        createDoc({ name, brand, price, image, desc, id: uuidv4(), contentEvo });
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
        </>
    );
}

export default AdminAddProduct;
