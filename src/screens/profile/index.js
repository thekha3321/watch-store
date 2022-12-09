import React, { useState } from 'react';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import Header from '../../components/Layout/Header';
import { storage } from '../../firebase/config';
import firebase from '../../firebase/config';
import { useEffect } from 'react';
import Loading from '../../components/Layout/Loading';
function Profile() {
    const cx = classNames.bind(styles);
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [showProgress, setShowprogress] = useState(false);
    const [progress, setProgress] = useState(0);
    const userId = sessionStorage.getItem('Uid');
    const [user, setuser] = useState();

    const userRef = firebase.firestore().collection('users').where('id', '==', userId);
    const usersRef = firebase.firestore().collection('users');
    async function getUser() {
        setLoading(true);
        await userRef.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                setuser(doc.data());
            });
            setLoading(false);
        });
    }

    const handleChange = (e) => {
        if (e.target.files[0].name) {
            setImage(e.target.files[0]);
            console.log(e.target.files);
        }
    };
    const handleUploadFile = () => {
        const uploadFile = storage.ref(`images/${image.name}`).put(image);
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
                    .child(image.name)
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
    }, []);

    const renderProfile = (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <h1>Thông tin cá nhân</h1>
                    {showProgress ? <progress value={progress} max="100" /> : null}
                </div>
                <div className={cx('user')}>
                    <div className={cx('user-avatar')}>
                        <img
                            src={
                                user
                                    ? user.avatar
                                        ? user.avatar
                                        : 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                                    : null
                            }
                            alt="avatar"
                        />
                        <label className={cx('label')}>
                            <input type="file" required onChange={handleChange} />
                            <span>Chọn ảnh đại diện</span>
                        </label>
                        <button
                            onClick={handleUploadFile}
                            style={{ padding: 20, backgroundColor: '#959599', borderRadius: 16 }}
                        >
                            Update
                        </button>
                    </div>
                    <div className={cx('user-info')}>
                        {user ? (
                            <div>
                                <p>Gmail: {user.email}</p>
                                <p>Name: {user.name}</p>
                                <p>Phone: {user.phone}</p>
                                <p>Address: {user.address}</p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <>
            <Header />
            {loading ? <Loading /> : renderProfile}
            <button onClick={handleUpdateUser} style={{ padding: 20, backgroundColor: '#959599', borderRadius: 16 }}>
                Update
            </button>
        </>
    );
}

export default Profile;
