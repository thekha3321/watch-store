import React, { useState } from 'react';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import Header from '../../components/Layout/Header';
import { storage } from '../../firebase/config';
import firebase from '../../firebase/config';
import { useEffect } from 'react';
import Loading from '../../components/Layout/Loading';
import Footer from '../../components/Layout/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Profile() {
    const cx = classNames.bind(styles);
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [showProgress, setShowprogress] = useState(false);
    const [progress, setProgress] = useState(0);
    const userId = sessionStorage.getItem('Uid');
    const [user, setuser] = useState();
    const [userBill, setUserBill] = useState([]);
    const [showSetting, setShowSetting] = useState(true);

    const userRef = firebase.firestore().collection('users').where('id', '==', userId);
    const usersRef = firebase.firestore().collection('users');
    const userBillsRef = firebase.firestore().collection('bills');
    // .where('idUser', '==', userId);
    async function getUser() {
        setLoading(true);
        await userRef.onSnapshot((querySnapShot) => {
            querySnapShot.forEach((doc) => {
                setuser(doc.data());
            });
            setLoading(false);
        });
    }
    async function getUserBill() {
        setLoading(true);
        await userBillsRef.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                if (doc.data().idUser === userId) items.push(doc.data());
            });
            setUserBill(items);
            setLoading(false);
        });
    }

    const handleChange = (e) => {
        if (e.target.files[0].name) {
            setImage(e.target.files[0]);
            handleUploadFile(e.target.files[0]);
        }
    };
    const handleUploadFile = (file) => {
        const uploadFile = storage.ref(`images/${file.name}`).put(file);
        setShowprogress(true);
        uploadFile.on(
            'state_changed',
            (snapshot) => {
                const prog = Math.random((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(prog);
            },
            (err) => console.log(err),
            () => {
                storage
                    .ref('images')
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => {
                        console.log(url);
                        setShowprogress(false);
                        setUrl(url);
                        sessionStorage.setItem('avatar', url);
                    });
            },
        );
    };
    let userInfo = {
        ...user,
        avatar: url,
    };
    const handleUpdateUser = () => {
        usersRef.doc(user.id).set(userInfo);
    };
    useEffect(() => {
        getUser();
        getUserBill();
    }, []);
    const renderSetting = (
        <div className={cx('setting')}>
            <div className={cx('setting-top')}>
                <div className={cx('wrap-input')}>
                    <label className={cx('label')}>USERNAME</label>
                    <input className={cx('input')} />
                </div>
                <div className={cx('wrap-input')}>
                    <label className={cx('label')}>EMAIL-ADDRESS</label>
                    <input className={cx('input')} />
                </div>
            </div>
            <div className={cx('setting-top')}>
                <div className={cx('wrap-input')}>
                    <label className={cx('label')}>PASSWORD</label>
                    <input className={cx('input')} />
                </div>
                <div className={cx('wrap-input')}>
                    <label className={cx('label')}>CONFIRM PASSWORD</label>
                    <input className={cx('input')} />
                </div>
            </div>
            <div className={cx('upload')}>
                <button className={cx('upload-btn')}>Upload</button>
            </div>
        </div>
    );
    const renderOrderLists = (
        <div className={cx('setting')}>
            <div className={cx('top')}>
                <table>
                    <tr className={cx('tr')}>
                        <td className={cx('title', 'text-upper', 'fw-600')}>id</td>
                        <td className={cx('title', 'text-upper', 'fw-600')}>status</td>
                        <td className={cx('title', 'text-upper', 'fw-600')}>date</td>
                        <td className={cx('title', 'text-upper', 'fw-600')}>total</td>
                    </tr>
                    {userBill.map((e,index) => (
                        <tr key={index} className={cx(e.status === 'Done' ? 'done' : 'waiting')}>
                            <td className={cx('title')}>{e.id}</td>
                            <td className={cx('title')}>{e.status}</td>
                            <td className={cx('title')}>{e.orderDate}</td>
                            <td className={cx('title')}>${e.totalMoney}</td>
                            <td className={cx('title')} style={{ height: 26, width: 26 }}>
                                <Tippy content="View more" animation="fade" arrow={true}>
                                    <Link to={`/bill/${e.id}`}>
                                        <FontAwesomeIcon style={{ padding: 4 }} icon={faInfoCircle} />
                                    </Link>
                                </Tippy>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className={cx('bot')}></div>
        </div>
    );
    const renderProfile = (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* <div className={cx('title')}>
                    <h1>Thông tin cá nhân</h1>
                </div> */}
                {showProgress ? <progress value={progress} max="100" /> : null}
                <div className={cx('user')}>
                    <div className={cx('user-avatar')}>
                        <div className={cx('user-content')}>
                            <img
                                className={cx('avatar')}
                                src={
                                    user
                                        ? user.avatar
                                            ? url || user.avatar
                                            : 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                                        : null
                                }
                                alt="avatar"
                            />
                            <label className={cx('label')}>
                                <input type="file" required onChange={handleChange} />
                                <span>Change avatar</span>
                            </label>
                            <button className={cx('btn')} onClick={handleUpdateUser}>
                                Update
                            </button>
                        </div>
                    </div>
                    <div className={cx('user-info')}>
                        {user ? (
                            <div className={cx('user-info-content')}>
                                <p>Gmail: {user.email}</p>
                                <p>Name: {user.name}</p>
                                <p>Phone: {user.phone}</p>
                                <p>Address: {user.address}</p>
                            </div>
                        ) : null}
                    </div>
                    {/* <div style={{ padding: 50 }}>
                        <h1>Lich su mua hang: </h1>
                        <span style={{ display: 'block' }}>time: {userBill.orderDate}</span>
                        <span>total: {userBill.totalMoney} $</span>
                        <div>
                            san pham:
                             {userBill.allProducts.map((e) => {
                                <p>{e.name}</p>;
                            })} 
                        </div>
                    </div> */}
                    <div
                        onClick={() => setShowSetting(true)}
                        className={cx('action', 'fw-600', showSetting ? 'active' : '')}
                    >
                        Profile settings
                    </div>
                    <div
                        onClick={() => setShowSetting(false)}
                        className={cx('action', 'fw-600', showSetting ? '' : 'active')}
                    >
                        Order Lists
                        <span className={cx('quality')}>{userBill.length}</span>
                    </div>
                </div>
                {showSetting ? renderSetting : renderOrderLists}
            </div>
        </div>
    );
    return (
        <>
            <Header />
            {loading ? <Loading /> : renderProfile}
            <Footer />
        </>
    );
}

export default Profile;
