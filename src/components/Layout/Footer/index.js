import classnames from 'classnames/bind';
import styles from './Footer.module.scss';

import { Link } from 'react-router-dom';

function Footer() {
    const cx = classnames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <Link to="/">
                        <img
                            className={cx('logo')}
                            src="https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2FLogo.png?alt=media&token=88db3aab-43ad-4086-9124-6b99ed273d7b"
                            alt=""
                        />
                    </Link>
                    <div className={cx('webflow')}>
                        <img
                            className={cx('webflow-img')}
                            src="https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Fwebflow.png?alt=media&token=8a60d63b-7c3e-4c20-aa01-b996eb8a487c"
                            alt=""
                        />
                        Follow on Webflow
                    </div>
                </div>
                <div className={cx('mid')}>
                    <div className={cx('about')}>
                        <header>Follow our Socials</header>
                        <div className={cx('desc')}>
                            <div className={cx('desc-img')}>
                                <img
                                    className={cx('social')}
                                    src="https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Finstagram.png?alt=media&token=98c6d08d-4ee9-47de-9a7c-3f53d42ef590"
                                    alt=""
                                />
                            </div>
                            <div className={cx('desc-img')}>
                                <img
                                    className={cx('social')}
                                    src="https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Ftwitter.png?alt=media&token=5f36ce10-40af-4bd7-bda0-3ae7d72c874b"
                                    alt=""
                                />
                            </div>
                            <div className={cx('desc-img')}>
                                <img
                                    className={cx('social')}
                                    src="https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Fslack.png?alt=media&token=c17d685e-2c4b-43a8-9c26-318ddf8513ad"
                                    alt=""
                                />
                            </div>
                            <div className={cx('desc-img')}>
                                <img
                                    className={cx('social')}
                                    src="https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Fmeta.png?alt=media&token=f4897252-ccd1-4460-9afd-6288e3f3e1fa"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('about')}>
                        <header>Company</header>
                        <div className={cx('desc-aboutus')}>
                            <p>About us</p>
                            <p>Press</p>
                            <p>Support</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className={cx('about')}>
                        <header>Cloneables</header>
                        <div className={cx('desc-aboutus')}>
                            <p>All product</p>
                            <p>Templates</p>
                            <p>Assets</p>
                            <p>UI Kits</p>
                        </div>
                    </div>
                    <div className={cx('about')}>
                        <header>Recourses</header>
                        <div className={cx('desc-aboutus')}>
                            <p>Learning Center</p>
                            <p>Promotion</p>
                            <p>Inspiration</p>
                            <p>Videos</p>
                            <p>Submit</p>
                        </div>
                    </div>
                    <div className={cx('about')}>
                        <header>Store</header>
                        <div className={cx('desc-aboutus')}>
                            <p>View Store</p>
                            <p>Forest UI kit</p>
                            <p>Otto Template</p>
                        </div>
                    </div>
                </div>
                <div className={cx('bot')}>
                    <div className={cx('copyright')}>
                        Copyright © 2023 DevTK <span> Powered by @DevDT</span>
                    </div>
                    <div className={cx('copyright')}>
                        <span style={{ fontSize: 16 }}>Privacy policy</span>
                        <span style={{ fontSize: 16 }}>Affiliate Notice</span>
                        <span style={{ fontSize: 16 }}>Press Kit</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
