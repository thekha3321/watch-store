import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('top')}>
                    <div className={cx('container')}>
                        <h3 className={cx('heading')}>THÔNG TIN CHUNG</h3>
                        <Link to="/" href="#">
                            Giới thiệu chung
                        </Link>
                        <Link to="/" href="#">
                            Kênh tuyển dụng
                        </Link>
                        <Link to="/" href="#">
                            Tin tức-Sự kiện
                        </Link>
                        <Link to="/" href="#">
                            Hệ thống cửa hàng
                        </Link>
                        <Link to="/" href="#">
                            Cộng đồng khách
                        </Link>
                    </div>
                    <div className={cx('container')}>
                        <h3 className={cx('heading')}>HỖ TRỢ KHÁCH HÀNG</h3>
                        <Link to="/" href="#">
                            1.Chính sách bảo hàng
                        </Link>
                        <Link to="/" href="#">
                            2.Chính sách đổi hàng
                        </Link>
                        <Link to="/" href="#">
                            3.Chính sách bảo mật
                        </Link>
                        <Link to="/" href="#">
                            4.Chính sách vận chuyển
                        </Link>
                        <Link to="/" href="#">
                            5.Hướng dẫn thanh toán
                        </Link>
                    </div>
                    <div className={cx('container')}>
                        <h3 className={cx('heading')}>HƯỚNG DẪN VÀ TƯ VẤN</h3>
                        <Link to="/" href="#">
                            Góc hỏi đáp
                        </Link>
                        <Link to="/" href="#">
                            Chứng nhận thương hiệu
                        </Link>
                        <Link to="/" href="#">
                            Tin tức-Sự kiện
                        </Link>
                        <Link to="/" href="#">
                            Hệ thống cửa hàng
                        </Link>
                        <Link to="/" href="#">
                            Báo chí về ALT
                        </Link>
                    </div>
                    <div className={cx('container')}>
                        <h3 className={cx('heading')}>HỆ THỐNG CỬA HÀNG</h3>
                        <Link to="">
                            <img src="http://watchvarious.somee.com/images/photo-1-1470836862788.jpg" alt="" />
                        </Link>
                        <h3 className={cx('heading')}>Xem hệ thống cửa hàng</h3>
                    </div>
                    <div className={cx('container')}>
                        <h3 className={cx('heading')}>HỖ TRỢ KHÁCH HÀNG</h3>
                        <Link to="">
                            <img
                                src="http://watchvarious.somee.com/images/5-buoc-len-ke-hoach-xay-dung-fanpage-2.jpg"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('container')}>
                        <h1>LOGO</h1>
                        <div className={cx('contact')}>
                            <Link to="">CÔNG TY CỔ PHẦN TRỰC TUYẾN ALT</Link>
                            <p>Địa chỉ: 41 Phố ABC, Phường. XYZ, Quận. HAIBABON, NAMSAUBAY</p>
                            <p>Hotline: 1800 XXXX</p>
                            <p>Email: info@alt.vn</p>
                            <p>Website: https://alt.vn</p>
                            <h5>ĐỒNG HỒ NAM, ĐỒ HỒ THỤY SỸ</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
