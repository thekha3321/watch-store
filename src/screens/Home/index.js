import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './Home.module.scss';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Sidebar from '../../components/Layout/Sidebar';
import ShopSection from '../../components/Layout/ShopSection';
import SlideBanner from '../../components/Layout/SlideBanner';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
// import Header from '../../components/Layout/Header';
// import ShopSaling from '../../components/Layout/ShopSaling';

// import { Link } from 'react-router-dom';
const cx = classnames.bind(styles);

function Home() {
    window.scrollTo(0, 0);
    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');
        if (authToken) {
            navigate('/home');
        }
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />
            <SlideBanner />
            <ShopSection />
            <Footer />
        </div>
    );
}

export default Home;
