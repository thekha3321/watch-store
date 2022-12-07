import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Footer.module.scss';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const cx = classnames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <div className={cx('left')}>
                        <h4>Logo</h4>
                        <p>
                            <FontAwesomeIcon className={cx('contact-icon')} icon={faLocationDot} />
                            23 Hung Vuong St., Da Nang
                        </p>
                        <p>
                            <FontAwesomeIcon className={cx('contact-icon')} icon={faEnvelope} />
                            @gmail.com
                        </p>
                        <p>
                            <FontAwesomeIcon className={cx('contact-icon')} icon={faPhone} />
                            +842346885
                        </p>
                    </div>
                    <div className={cx('mid')}>
                        <div>
                            <h4>Contact</h4>
                            <p>FanPage</p>
                            <p>another page</p>
                            <p>invest</p>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <h4>Order</h4>
                        <input placeholder="Your Info..."></input>
                        <button>Submit</button>
                    </div>
                </div>

                <div className={cx('bot')}>
                    <span>© 2022 Cosmecos Theme</span>
                    <span>Terms and Conditions</span>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
