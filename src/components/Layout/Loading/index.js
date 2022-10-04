import React from 'react'
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles)

function Loading() {
  return (
    <div className={cx('spinner-container')}>
      <div className={cx('loading-spinner')}>
      </div>
    </div>
  )
}

export default Loading;
