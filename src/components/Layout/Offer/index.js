import React from 'react';
import classNames from 'classnames/bind';
import styles from './Offer.module.scss';

function Offer() {
    const cx = classNames.bind(styles);
    const offer = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Foffer1.png?alt=media&token=c671e9d9-831c-468b-87d3-1f50ed3c5f45',
            title: '24/7 Support',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat ipsum corrupti molestias.',
            gif: 'https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Ftech-support.gif?alt=media&token=30a6f123-0ef5-4849-94e0-bef0fa30e247',
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Foffer2.png?alt=media&token=64a8ed45-464c-4ee1-b4c1-04237646f9ad',
            title: 'Cash Back',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat ipsum corrupti molestias.',
            gif: 'https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Fgif2.gif?alt=media&token=e8a72e0d-1107-4f85-9099-a3b1d16cf2ef',
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Foffer3.png?alt=media&token=e6093bc3-53f1-4f31-adf3-94eaf27a0e01',
            title: 'Monthly Offer',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat ipsum corrupti molestias.',
            gif: 'https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Fgif3.gif?alt=media&token=5cdf31f1-87a2-4f65-a0ed-7aa6705fc516',
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Foffer4.png?alt=media&token=509b8bdf-3733-4fc4-b5f5-60a2de9ee06a',
            title: 'Membership',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat ipsum corrupti molestias.',
            gif: 'https://firebasestorage.googleapis.com/v0/b/sales-watch-92e59.appspot.com/o/images%2Fgif4.gif?alt=media&token=c7b1b86a-53cc-41dc-8f30-181e6b3a9b77',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <header>
                    What The <span>Offer</span>
                </header>
                <div className={cx('content')}>
                    {offer.map((off,index) => (
                        <div key={index} className={cx('offer')}>
                            <div className={cx('img-top')}>
                                <img src={off.img} alt="" />
                            </div>
                            <h4>{off.title}</h4>
                            <p>{off.desc}</p>
                            <img className={cx('gif')} src={off.gif} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Offer;
