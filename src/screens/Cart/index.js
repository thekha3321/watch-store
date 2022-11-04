import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Layout/Header';
import firebase from '../../firebase/config';

const cx = classNames.bind(styles);

function Cart() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection('cart');
    // const email = localStorage.getItem('Auth Token');
    // console.log(email);
    // const createDoc = () => {
    //     ref.doc(email);
    // };

    let navigate = useNavigate();
    function getProducts() {
        setLoading(true);
        ref.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items);
            setLoading(false);
        });
    }
    useEffect(() => {
        getProducts();
        // createDoc();
    }, []);
    console.log(ref);

    const handleDeleteProduct = (docx) => {
        ref.doc(docx.id)
            .delete()
            .catch((err) => {
                alert(err);
                console.log(err);
            });

        //eslint-disable-line
    };

    let totalMoney = 0;
    products.map((product) => {
        totalMoney += product.price;
    });

    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('container')}>
                        <div className={cx('heading')}>
                            <span>Giỏ hàng</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className={cx('left')}>
                            <span className={cx('left-heading')}>
                                <div className={cx('product-info-top')}>HÌNH ẢNH</div>
                                <div className={cx('product-info-top')}>SẢN PHẨM</div>
                                <div className={cx('product-info-top')}>GIÁ</div>
                                <div className={cx('product-info-top')}>SỐ LƯỢNG</div>
                                <div className={cx('product-info-top')}>THÀNH TIỀN</div>
                                <div className={cx('product-info-top')}>XÓA</div>
                            </span>
                            {products.map((product, index) => (
                                <div key={index} className={cx('left-content')}>
                                    <div className={cx('product-info-midle')}>
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className={cx('product-info-midle', 'ta-none')}>
                                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                                    </div>
                                    <div className={cx('product-info-midle')}>
                                        <span>{new Intl.NumberFormat('de-DE').format(product.price)}đ</span>
                                    </div>
                                    <div className={cx('product-info-midle')}>
                                        1
                                        {/* <select className={cx('select-quality')}>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </select> */}
                                    </div>
                                    <div className={cx('product-info-midle')}>
                                        <span>{new Intl.NumberFormat('de-DE').format(product.price)}đ</span>
                                    </div>
                                    <div className={cx('product-info-midle')}>
                                        <button
                                            className={cx('delete-icon')}
                                            onClick={() => {
                                                handleDeleteProduct(product);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className={cx('left-info-bottom')}>
                                <span>TỔNG TIỀN: </span>
                                <span>{`${new Intl.NumberFormat('de-DE').format(totalMoney)} đ`}</span>
                            </div>
                            <div className={cx('checkout')}>
                                <Link to="/home">
                                    <div className={cx('ctn-shopping')}>TIẾP TỤC MUA SẮM</div>
                                </Link>

                                <button
                                    onClick={() => {
                                        if (localStorage.getItem('Auth Token')) {
                                            navigate('/order');
                                            // eslint-disable-next-line no-restricted-globals
                                        } else if (confirm('bạn chưa đăng nhập, bạn có muốn đăng nhập không ?')) {
                                            navigate('/login');
                                        }
                                    }}
                                    className={cx('checkout-btn')}
                                >
                                    ĐẶT HÀNG
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
