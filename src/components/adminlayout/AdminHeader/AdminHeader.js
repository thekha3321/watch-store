import React from 'react';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faMagnifyingGlass, faMessage, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import styles from './AdminHeader.module.scss';

const cx = className.bind(styles);

function AdminHeader() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('')}>
                    <div className={cx('search-box')}>
                        <input placeholder="Tìm Kiếm..." className={cx('search-input')} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('actions-list')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMessage} />
                        <FontAwesomeIcon className={cx('icon')} icon={faBell} />
                        <Tippy
                            theme="light"
                            interactive
                            placement="bottom"
                            arrow
                            content={
                                <div className={cx('menu')}>
                                    <Link to="">
                                        <div className={cx('menu-action')}>Tài khoản</div>
                                    </Link>
                                    <Link to="/login">
                                        <div className={cx('menu-action')}>
                                            <button>Đăng xuất</button>
                                        </div>
                                    </Link>
                                </div>
                            }
                        >
                            <div className={cx('icon')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                    alt=""
                                />
                                <FontAwesomeIcon className={cx('avatar-icon')} icon={faCaretDown} />
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;
