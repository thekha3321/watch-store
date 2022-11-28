import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './Home.module.scss';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Sidebar from '../../components/Layout/Sidebar';
import ShopSection from '../../components/Layout/ShopSection';
import SlideBanner from '../../components/Layout/SlideBanner';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
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
            {/* <Banner src="https://cdn.eoniq.co/spree/images/845685/desktop/EONIQ_Navigator_custom_pilot_watches_230fa7e2c7e91f18f5a72d056384f963.jpg?1619777370" /> */}
            <ShopSection />
            <Footer />
        </div>
    );
}

export default Home;
