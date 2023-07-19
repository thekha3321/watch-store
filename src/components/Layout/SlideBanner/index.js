import React from 'react';
import classnames from 'classnames/bind';
import styles from './SlideBanner.module.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function SlideBanner() {
    const cx = classnames.bind(styles);

    const banners = [
        {
            url: 'https://cdn.eoniq.co/assets/diver@d@4096-bbe14caf454443a05e90176d652660ce.jpg',
            caption: 'Slide 1',
            name: 'EXPEDITION',
            price: 'USD270',
            detail: 'powered by Seiko automatic movements.',
        },
        {
            url: 'https://cdn.eoniq.co/spree/images/246718/desktop/new-pinot-banner_5661b67f7150ff2f8fa7481403b075f2.jpg?1636984156',
            caption: 'Slide 2',
            name: 'Pinot Blanc',
            price: 'USD318',
            detail: 'Skeleton watch for all occasions.',
        },
        {
            url: 'https://cdn.eoniq.co/spree/images/641258/desktop/WC-NVSWS_1c169019cc62689878e19a53649ca3f4.jpg?1619777587',
            caption: 'Slide 3',
            name: 'Navigator Swiss',
            price: 'USD698',
            detail: ' The Best Just Got Better.',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Slide indicators={true} className={cx('slide')}>
                    {banners.map((banner, index) => (
                        <div key={index} className="each-slide" >
                            <img src={banner.url} alt="Banner" />
                            <span>
                                <h1>{banner.name}</h1>
                                <p>{banner.price}</p>
                                <h4>{banner.detail}</h4>
                                <button className={cx('btn')}>Buy Now</button>
                            </span>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    );
}

export default SlideBanner;
