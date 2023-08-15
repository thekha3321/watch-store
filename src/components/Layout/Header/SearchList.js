import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import products from '../../../data/products';
import styles from './Search.css';
import firebase from '../../../firebase/config';

function SearchList({ isBlur, value, input }) {
    const productsRef = firebase.firestore().collection('products');
    const [products, setProducts] = useState([]);
    // const searchProducts = document.getElementById('search-product-list');

    function getProducts() {
        productsRef.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items);
        });
    }
    useEffect(() => {
        getProducts();
    }, []);

    const filteredData = products.filter((el) => {
        //if no input the return the original
        if (value === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(value);
        }
    });
    return (
        <>
            <ul id="search-product-list">
                {value
                    ? filteredData.map((product, index) => (
                          <Link key={index} to={`/products/${product.id}`}>
                              <li className="product" key={product.id}>
                                  <img src={product.image} alt="" />
                                  <div className="product-container">
                                      <span>{product.name}</span>
                                      <h5 style={{ color: 'red' }}>${product.price}</h5>
                                  </div>
                              </li>
                          </Link>
                      ))
                    : ''}
            </ul>
        </>
    );
}

export default SearchList;
