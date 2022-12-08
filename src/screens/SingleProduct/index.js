import React from 'react';

import Footer from '../../components/Layout/Footer';
import Sidebar from './../../../src/components/Layout/Sidebar';
import Header from '../../components/Layout/Header';
import SingleProduct__ from './SingleProduct__';

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
            <Footer />
        </>
    );
}

export default SingleProduct;
