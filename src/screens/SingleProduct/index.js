import React from 'react';
import classNames from 'classnames/bind';

import styles from './SingleProduct.module.scss';
import Footer from '../../components/Layout/Footer';
import Sidebar from './../../../src/components/Layout/Sidebar';
// import products from '../../data/products';
import Header from '../../components/Layout/Header';
import SingleProduct__ from './SingleProduct__';

// import firebase from '../../firebase/config';

function SingleProduct() {
    const cx = classNames.bind(styles);
    window.scrollTo(0, 0);

    // function handleFilId () {
    //     products.map((product) => {
    //         if(product.id === productId) {
    //         }
    //     })
    // }
    // console.log(products[0])

    return (
        <>
            <Header />
            <Sidebar />
            <SingleProduct__ />
            <Footer />
        </>
    );
}

export default SingleProduct;
