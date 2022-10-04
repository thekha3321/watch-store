import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';
// import Logo from '../../../assets/img/Logo.png';
import Login from '../../../screens/Login';
import Register from '../../../screens/Register';
import Cart from '../../../screens/Cart';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to="/">
                    {/* <img className={cx('logo')} src={Logo} alt="Logo" /> */}
                    <h1>LOGO</h1>
                </Link>
                <div className={cx('search-box')}>
                    <input placeholder="Tìm Kiếm..." className={cx('search-input')} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <Tippy content={'Giỏ hàng'}>
                        <Link to="/cart" element={<Cart />} className={cx('cart')}>
                            {/* Giỏ hàng */}
                            <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                            <span className={cx('quality')}>3</span>
                        </Link>
                    </Tippy>
                    <Link to="/register" element={<Register />} className={cx('signup-btn')}>
                        Đăng Ký
                    </Link>
                    <Link to="/login" element={<Login />} className={cx('signin-btn')}>
                        Đăng Nhập
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
