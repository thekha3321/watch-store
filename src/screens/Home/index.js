import React from 'react';
import classnames from 'classnames/bind';
import styles from './Home.module.scss';

// import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import ShopSection from '../../components/Layout/ShopSection';
import SlideBanner from '../../components/Layout/SlideBanner';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import ShopSaling from '../../components/Layout/ShopSaling';

// import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function Home() {
    window.scrollTo(0,0)
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <Sidebar />
            <SlideBanner /> 
            <ShopSection />
            {/* <ShopSaling/> */}
            <Footer/>
        </div>
    );
}

export default Home;
