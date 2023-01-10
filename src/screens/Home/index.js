import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './Home.module.scss';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Sidebar from '../../components/Layout/Sidebar';
import ShopSection from '../../components/Layout/ShopSection';
import SlideBanner from '../../components/Layout/SlideBanner';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import LogoBanner from '../../components/Layout/LogoBanner';
import Offer from '../../components/Layout/Offer';
// import Header from '../../components/Layout/Header';
// import ShopSaling from '../../components/Layout/ShopSaling';

// import { Link } from 'react-router-dom';

function Home() {
    const cx = classnames.bind(styles);
    window.scrollTo(0, 0);

    useEffect(() => {}, []);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />
            <SlideBanner />
            <Offer />
            <ShopSection />
            <Footer />
        </div>
    );
}

export default Home;
