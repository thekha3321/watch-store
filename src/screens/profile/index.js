import React from 'react';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import Header from '../../components/Layout/Header';

function Profile() {
    const cx = classNames.bind(styles);
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('title')}>
                        <h1>Thông tin cá nhân</h1>
                    </div>
                    <div className={cx('user')}>
                        <div className={cx('user-avatar')}>
                            <img
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                alt="avatar"
                            />
                            <label className={cx('label')}>
                                <input type="file" required />
                                <span>Chọn ảnh đại diện</span>
                            </label>
                        </div>
                        <div className={cx('user-info')}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
