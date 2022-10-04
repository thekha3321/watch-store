import classnames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Tippy from '@tippyjs/react';
import products from '../../../data';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

// Handle loop brand
let brand = [];

brand.push(...products.map((product) => product.brand));
let brandHandled = brand.reduce(function (accumulator, element) {
    if (accumulator.indexOf(element) === -1) {
        accumulator.push(element);
    }
    return accumulator;
}, []);
//------------------

function Sidebar() {
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
                                <Link className={cx('tippy-content')} to={`brand/${brand}`}>
                                    <div key={index}>{brand}</div>
                                </Link>
                            ))}
                        </div>
                        // <Link to='/login' className={cx('heading')}>hello</Link>
                    }
                >
                    <div className={cx('sidebar-item')}>
                        Thương hiệu
                        {/* <ul>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                    </ul> */}
                        <FontAwesomeIcon className={cx('sidebar-item-icon')} icon={faCaretDown} />
                    </div>
                </Tippy>
                <div className={cx('sidebar-item')}>
                    Đồng hồ
                    <FontAwesomeIcon className={cx('sidebar-item-icon')} />
                </div>
                <div className={cx('sidebar-item')}>Phụ Kiện đồng hồ</div>
                <div className={cx('sidebar-item')}>khuyến mãi</div>
            </div>
        </div>
    );
}

export default Sidebar;
