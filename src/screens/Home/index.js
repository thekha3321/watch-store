import React from 'react';
import classnames from 'classnames/bind';
import styles from './Home.module.scss';

// import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import ShopSection from '../../components/Layout/ShopSection';
import SlideBanner from '../../components/Layout/SlideBanner';
import Footer from '../../components/Layout/Footer';
// import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <SlideBanner />
            <ShopSection />
            <Footer/>
        </div>
    );
}

export default Home;
