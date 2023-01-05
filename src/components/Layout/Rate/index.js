import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import classNames from 'classnames/bind';
import styles from './Rate.module.scss';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import firebase from '../../../firebase/config';
import { useParams, useNavigate } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Rate = ({ products, initContentEvo }) => {
    const { productId } = useParams();
    const productsRef = firebase.firestore().collection('products');
    const Uid = sessionStorage.getItem('Uid');
    const email = sessionStorage.getItem('Email');
    const userRef = firebase.firestore().collection('users').where('id', '==', Uid);
    const cx = classNames.bind(styles);
    const [user, setUser] = useState();
    const [avatar, setAvatar] = useState();
    const [value, setValue] = useState('');
    const [rating, setRating] = useState(0);
    const [ratingDetail, setRatingDetail] = useState('+Your Rating');
    const navigate = useNavigate();

    async function getUser() {
        await userRef.onSnapshot((querySnapShot) => {
            querySnapShot.forEach((doc) => {
                setUser(doc.data());
            });
        });
    }
    const ratingChanged = (newRating) => {
        switch (newRating) {
            case 1:
                setRating('★');
                setRatingDetail('Very bad');
                break;
            case 2:
                setRating('★★');
                setRatingDetail('Bad');
                break;
            case 3:
                setRating('★★★');
                setRatingDetail('Good');
                break;
            case 4:
                setRating('★★★★');
                setRatingDetail('Very Good');
                break;
            case 5:
                setRating('★★★★★');
                setRatingDetail('Excellent');
                break;

            default:
        }
    };

    let valueRating = {
        value,
        ratingDetail,
        rating,
        avatar: sessionStorage.getItem('avatar'),
        name: sessionStorage.getItem('Name'),
    };
    let valueProduct = {
        ...products,
        contentEvo: [...initContentEvo, valueRating],
    };
    const handlePushEvoluate = () => {
        if (firebase.auth().currentUser) {
            try {
                productsRef.doc(productId).set(valueProduct);
                toast.success('Successfully!');
            } catch (e) {
                toast.error('Fail!');
            }
            // eslint-disable-next-line no-restricted-globals
        } else if (confirm('bạn chưa đăng nhập, bạn có muốn đăng nhập không ?')) {
            navigate('/login');
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            <div className={cx('container')}>
                <h4 className={cx('text-upper')}>Evaluate products</h4>
                <div className={cx('evaluate')}>
                    <p>Write an evaluate</p>
                    <div className={cx('rating')}>
                        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                        <span className={cx('fz-16', 'fw-600')}>{ratingDetail}</span>
                    </div>
                    <TextareaAutosize
                        onChange={(e) => setValue(e.target.value)}
                        maxRows={4}
                        aria-label="maximum height"
                        placeholder="Your evaluate..."
                        style={{ fontSize: 16, padding: 6, width: 500, border: '1px solid #ccc', minHeight: 100 }}
                    />
                    <button className={cx('btn')} onClick={handlePushEvoluate}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Rate;
