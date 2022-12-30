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
    const [isValid1, setIsValid1] = useState(false);
    const [isValid2, setIsValid2] = useState(false);
    const [isValid3, setIsValid3] = useState(false);
    const [isValid4, setIsValid4] = useState(false);
    const [isValid5, setIsValid5] = useState(false);
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
                                <div>
                                    <textarea
                                        onBlur={(e) =>
                                            e.target.value.length === 0
                                                ? ((document.getElementById('notiname').innerText =
                                                      'Mục này không được để trống'),
                                                  setIsValid1(false))
                                                : ((document.getElementById('notiname').innerText = ''),
                                                  setIsValid1(true))
                                        }
                                        id="name"
                                        wrap="soft"
                                        name="name"
                                        type="text"
                                        placeholder=""
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <span style={{ color: 'red' }} id="notiname"></span>
                                </div>

                                <label>Brand</label>
                                <div>
                                    <textarea
                                        onBlur={(e) =>
                                            e.target.value.length === 0
                                                ? ((document.getElementById('notibrand').innerText =
                                                      'Mục này không được để trống'),
                                                  setIsValid2(false))
                                                : ((document.getElementById('notibrand').innerText = ''),
                                                  setIsValid2(true))
                                        }
                                        id="brand"
                                        name="name"
                                        type="text"
                                        placeholder=""
                                        onChange={(e) => setBrand(e.target.value)}
                                    />
                                    <span style={{ color: 'red' }} id="notibrand"></span>
                                </div>
                                <label>Price</label>
                                <div>
                                    <textarea
                                        onBlur={(e) =>
                                            e.target.value - e.target.value !== 0
                                                ? ((document.getElementById('notiprice').innerText =
                                                      'Mục này phải là số'),
                                                  setIsValid3(false))
                                                : ((document.getElementById('notiprice').innerText = ''),
                                                  setIsValid3(true))
                                        }
                                        id="price"
                                        name="name"
                                        type="text"
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                    />
                                    <span style={{ color: 'red' }} id="notiprice"></span>
                                </div>
                                <label>Image</label>
                                <div>
                                    <textarea
                                        onBlur={(e) =>
                                            e.target.value.length === 0
                                                ? ((document.getElementById('notiimg').innerText =
                                                      'Mục này không được để trống'),
                                                  setIsValid4(false))
                                                : ((document.getElementById('notiimg').innerText = ''),
                                                  setIsValid4(true))
                                        }
                                        id="img"
                                        name="name"
                                        type="text"
                                        placeholder="Link"
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                    <span style={{ color: 'red' }} id="notiimg"></span>
                                </div>
                                <label>Description</label>
                                <div>
                                    <textarea
                                        onBlur={(e) =>
                                            e.target.value.length === 0
                                                ? ((document.getElementById('notidesc').innerText =
                                                      'Mục này không được để trống'),
                                                  setIsValid5(false))
                                                : ((document.getElementById('notidesc').innerText = ''),
                                                  setIsValid5(true))
                                        }
                                        id="desc"
                                        name="desc"
                                        type="text"
                                        placeholder=""
                                        onChange={(e) => setDesc(e.target.value)}
                                    />
                                    <span style={{ color: 'red' }} id="notidesc"></span>
                                </div>
                            </div>
                            <div className={cx('btn')}>
                                <button
                                    onClick={() => {
                                        isValid1 &&
                                            isValid2 &&
                                            isValid3 &&
                                            isValid4 &&
                                            isValid5 &&
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
