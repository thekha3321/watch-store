import React from 'react';
import classnames from 'classnames/bind';
import styles from './Banner.module.scss';

function Banner(props) {
    const cx = classnames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img src={props.src} alt="" />
            </div>
        </div>
    );
}

export default Banner;
