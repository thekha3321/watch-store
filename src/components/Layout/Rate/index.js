import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import classNames from 'classnames/bind';
import styles from './Rate.module.scss';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import firebase from '../../../firebase/config';
import { useParams } from 'react-router';

const Rate = ({ products, initContentEvo }) => {
    const { productId } = useParams();
    const productsRef = firebase.firestore().collection('products');
    const Uid = sessionStorage.getItem('Uid');
    const userRef = firebase.firestore().collection('users').where('id', '==', Uid);
    const cx = classNames.bind(styles);
    const [user, setUser] = useState();
    const [avatar, setAvatar] = useState();
    const [value, setValue] = useState('');
    const [rating, setRating] = useState(0);
    const [ratingDetail, setRatingDetail] = useState('');

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
                break;
            case 2:
                setRating('★★');
                break;
            case 3:
                setRating('★★★');
                break;
            case 4:
                setRating('★★★★');
                break;
            case 5:
                setRating('★★★★★');
                break;
            default:
        }
    };

    let valueRating = {
        value,
        rating,
        avatar: sessionStorage.getItem('avatar'),
        name: sessionStorage.getItem('Name'),
    };
    let valueProduct = {
        ...products,
        contentEvo: [...initContentEvo, valueRating],
    };
    const handlePushEvoluate = () => {
        try {
            productsRef.doc(productId).set(valueProduct);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        switch (rating) {
            case '★':
                setRatingDetail('Very bad');
                break;
            case '★★':
                setRatingDetail('Bad');
                break;
            case '★★★':
                setRatingDetail('Good');
                break;
            case '★★★★':
                setRatingDetail('Very Good');
                break;
            case '★★★★★':
                setRatingDetail('Excellent');
                break;
            default:
                setRatingDetail('+Your Rating');
        }
        getUser();
    }, []);

    return (
        <div className={cx('wrapper')}>
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
