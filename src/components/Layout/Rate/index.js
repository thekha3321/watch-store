import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import classNames from 'classnames/bind';
import styles from './Rate.module.scss';
const Rate = () => {
    const cx = classNames.bind(styles);
    const [rating, setRating] = useState(0);
    const [ratingDetail, setRatingDetail] = useState('');
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    useEffect(() => {
        switch (rating) {
            case 1:
                setRatingDetail('Very bad');
                break;
            case 2:
                setRatingDetail('Bad');
                break;
            case 3:
                setRatingDetail('Good');
                break;
            case 4:
                setRatingDetail('Very Good');
                break;
            case 5:
                setRatingDetail('Excellent');
                break;
            default:
                setRatingDetail('+Your Rating');
        }
    }, [rating]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                <span className={cx('')}>{ratingDetail}</span> */}
                <h4 className={cx('text-upper')}>Evaluate products</h4>
                <div className={cx('evaluate')}></div>
            </div>
        </div>
    );
};
export default Rate;
