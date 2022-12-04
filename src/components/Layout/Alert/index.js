import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Alert.module.scss';

function Alert({ children, type, message }) {
    const cx = classnames.bind(styles);
    const [isShow, setIsShow] = useState(true);

    const renderElAlert = function () {
        return React.cloneElement(children);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setIsShow(false);
    };

    return (
        <div className={cx('alert', `${type}`, !isShow && 'hide')}>
            <span className={cx('closebtn')} onClick={handleClose}>
                {' '}
                &times;
            </span>
            {message}
        </div>
    );
}

export default Alert;
