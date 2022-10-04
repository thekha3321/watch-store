import React from 'react';
import classnames from 'classnames/bind';
import styles from './SlideBanner.module.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const cx = classnames.bind(styles);

const banners = [
    {
        url: 'http://watchvarious.somee.com/images/1.jpg',
        caption: 'Slide 1',
    },
    {
        url: 'http://watchvarious.somee.com/images/2.jpg',
        caption: 'Slide 2',
    },
    {
        url: 'http://watchvarious.somee.com/images/3.jpg',
        caption: 'Slide 3',
    },
];

function SlideBanner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Slide indicators={true} className={cx('slide')}>
                    {banners.map((banner, index) => (
                        <div className="each-slide" key={index}>
                            <div>
                                <img src={banner.url} alt="" />
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    );
}

export default SlideBanner;
