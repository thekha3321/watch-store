import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import classNames from 'classnames/bind';
import styles from './AdminAddproduct.module.scss';
import AdminSidebar from '../../components/adminlayout/AdminSidebar';
import firebase from './../../firebase/config';
import Header from '../../components/Layout/Header';
import { storage } from '../../firebase/config';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const [url, setUrl] = useState(null);
    const createDoc = (newDataObj) => {
        try {
            productsRef.doc(newDataObj.id).set(newDataObj);
            toast.success('Successfully!');
        } catch (error) {
            toast.error('Fail!');
        }
    };
    let contentEvo = [];
    const handleChange = (e) => {
        if (e.target.files[0].name) {
            setImage(e.target.files[0]);
            handleUploadFile(e.target.files[0]);
        }
    };
    const handleUploadFile = (file) => {
        const uploadFile = storage.ref(`images/${file.name}`).put(file);
        uploadFile.on(
            'state_changed',
            (snapshot) => {
                const prog = Math.random((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            },
            (err) => console.log(err),
            () => {
                storage
                    .ref('images')
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => {
                        console.log(url);
                        setUrl(url);
                    });
            },
        );
    };
    return (
        <>
            {' '}
            <Header />
            <ToastContainer />
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
                                                      'Field can not be empty.'),
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
                                                      'Field can not be empty.'),
                                                  setIsValid2(false))
                                                : ((document.getElementById('notibrand').innerText = ''),
                                                  setIsValid2(true))
                                        }
                                        id="brand"
                                        name="name"
                                        type="text"
                                        placeholder=""
                                        onChange={(e) => setBrand(e.target.value.toUpperCase())}
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
                                <div className={cx('row')}>
                                    <label className={cx('label')}>
                                        <input
                                            id="img"
                                            type="file"
                                            onBlur={(e) =>
                                                e.target.value.length === 0
                                                    ? ((document.getElementById('notiimg').innerText =
                                                          'Field can not be empty.'),
                                                      setIsValid4(false))
                                                    : ((document.getElementById('notiimg').innerText = ''),
                                                      setIsValid4(true))
                                            }
                                            className={cx('input')}
                                            required
                                            onChange={handleChange}
                                        />
                                        <span className={cx('span')}>choose file </span>
                                    </label>
                                    {url && <img className={cx('img')} src={url} alt="" />}
                                </div>
                                <span style={{ color: 'red' }} id="notiimg"></span>
                                <label>Description</label>
                                <div>
                                    <textarea
                                        onBlur={(e) =>
                                            e.target.value.length === 0
                                                ? ((document.getElementById('notidesc').innerText =
                                                      'Field can not be empty.'),
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
                                    style={{ borderRadius: 6, fontSize: 18 }}
                                    onClick={() => {
                                        isValid1 &&
                                            isValid2 &&
                                            isValid3 &&
                                            isValid4 &&
                                            isValid5 &&
                                            createDoc({
                                                name,
                                                brand,
                                                price,
                                                image: url,
                                                desc,
                                                id: uuidv4(),
                                                contentEvo,
                                            });
                                        document.getElementById('name').value = '';
                                        document.getElementById('brand').value = '';
                                        document.getElementById('price').value = '';
                                        document.getElementById('img').value = '';
                                        document.getElementById('desc').value = '';
                                        setUrl(null);
                                    }}
                                >
                                    Create
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
