import { faMagnifyingGlass, faCartShopping, faCircleRadiation, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import React, { useState, useEffect } from 'react';

import styles from './Header.module.scss';
import Login from '../../../screens/Login';
import Register from '../../../screens/Register';
import Cart from '../../../screens/Cart';
import firebase from '../../../firebase/config';

const cx = classNames.bind(styles);

function Header() {
    const [user, setUser] = useState(true);
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState('');

    const rec = firebase.firestore().collection('cart');

    function getProducts() {
        rec.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items);
        });
    }
    useEffect(() => {
        getProducts();
    }, []);
    let quality = 0;
    products.map((product) => {
        quality += 1;
    });

    const headerRegister = (
        <div>
            <Link to="/register" element={<Register />} className={cx('signup-btn')}>
                Đăng Ký
            </Link>
            <Link to="/login" element={<Login />} className={cx('signin-btn')}>
                Đăng Nhập
            </Link>
        </div>
    );
    const headerUser = (
        <div className={cx('user')}>
            <Tippy
                className={cx('uer')}
                interactive
                content={
                    <div className={cx('user-content')}>
                        <button>tài khoản</button>
                        <button
                            onClick={() => {
                                setUser(false);
                            }}
                            className={cx('signout-btn')}
                        >
                            đăng xuất
                        </button>
                    </div>
                }
            >
                <div className={cx('')}>
                    <img
                        className={cx('avatar')}
                        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                        alt=""
                    />
                    <FontAwesomeIcon className={cx('avatar-icon')} icon={faCaretDown} />
                </div>
            </Tippy>
        </div>
    );
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to="/">
                    <h1>LOGO</h1>
                </Link>
                <div className={cx('search-box')}>
                    <input
                        placeholder="Tìm Kiếm..."
                        className={cx('search-input')}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    {/* <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </button> */}
                </div>
                <div className={cx('actions')}>
                    <Tippy content={'Giỏ hàng'}>
                        <Link to="/cart" element={<Cart />} className={cx('cart')}>
                            <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                            <span className={cx('quality')}>{quality}</span>
                        </Link>
                    </Tippy>
                    {user ? headerUser : headerRegister}
                </div>
            </div>
        </div>
    );
}

export default Header;
