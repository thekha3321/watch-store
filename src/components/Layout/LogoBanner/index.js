import React from 'react';
import classnames from 'classnames/bind';
import styles from './LogoBanner.module.scss';

function LogoBanner() {
    const cx = classnames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img
                    className={cx('logo')}
                    src="https://www.icon-icon.com/wp-content/uploads/2020/06/icon-icon-logo-omega.jpg"
                    alt=""
                />
                <img
                    className={cx('logo')}
                    src="https://cdn.printgo.vn/uploads/media/761388/rolex5_1559754035.jpg"
                    alt=""
                />
                <img
                    className={cx('logo')}
                    src="https://topwatch.com.vn/upload_images/images/lich-su-dong-ho-orient-ngoi-sao-nguoc-huyen-thoai-phuong-dong.jpg"
                    alt=""
                />
                <img
                    className={cx('logo')}
                    src="https://erawatch.vn/wp-content/uploads/2022/04/tissot-logo-500x296-1.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default LogoBanner;
