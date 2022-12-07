import React from 'react';

import Footer from '../../components/Layout/Footer';
import Sidebar from './../../../src/components/Layout/Sidebar';
import Header from '../../components/Layout/Header';
import SingleProduct__ from './SingleProduct__';
import Rate from '../../components/Layout/Rate';

function SingleProduct() {
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
            <Rate />
            <Footer />
        </>
    );
}

export default SingleProduct;
