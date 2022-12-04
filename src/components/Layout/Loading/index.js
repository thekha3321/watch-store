import React from 'react';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

function Loading() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('circle')}></div>
                <div className={cx('circle')}></div>
                <div className={cx('circle')}></div>
                <div className={cx('shadow')}></div>
                <div className={cx('shadow')}></div>
                <div className={cx('shadow')}></div>
                <span>Loading</span>
            </div>
        </div>
    );
}

export default Loading;
