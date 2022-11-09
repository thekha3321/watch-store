import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Tippy from '@tippyjs/react';
// import products from '../../../data/products';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import firebase from '../../../firebase/config';

const cx = classnames.bind(styles);

function Sidebar() {
    const [products, setProducts] = useState([]);

    const ref = firebase.firestore().collection('products');

    function getProducts() {
        ref.onSnapshot((querySnapShot) => {
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
    // Handle fil brand
    let brand = [];

    brand.push(...products.map((product) => product.brand));

    let brandHandled = brand.reduce(function (accumulator, element) {
        if (accumulator.indexOf(element) === -1) {
            accumulator.push(element);
        }
        return accumulator;
    }, []);
    //------------------
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Tippy
                    className={cx('tippy-navbar')}
                    theme="light"
                    interactive
                    placement="bottom"
                    arrow
                    content={
                        <div className={cx('tippy-container')}>
                            {brandHandled.map((brand, index) => (
                                <Link key={index} className={cx('tippy-content')} to={`/brand/${brand}`}>
                                    <div>{brand}</div>
                                </Link>
                            ))}
                        </div>
                        // <Link to='/login' className={cx('heading')}>hello</Link>
                    }
                >
                    <div className={cx('sidebar-item')}>
                        Thương hiệu
                        <FontAwesomeIcon className={cx('sidebar-item-icon')} icon={faCaretDown} />
                    </div>
                </Tippy>
                <div className={cx('sidebar-item')}>
                    Đồng hồ
                    <FontAwesomeIcon className={cx('sidebar-item-icon')} />
                </div>
                <div className={cx('sidebar-item')}>Phụ Kiện đồng hồ</div>
                <div className={cx('sidebar-item')}>
                    <Link to="/saling">khuyến mãi</Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
