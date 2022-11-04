import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import products from '../../../data/products';
import styles from './Search.css';
import firebase from '../../../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function SearchList({ value, input }) {
    const ref = firebase.firestore().collection('products');
    const [products, setProducts] = useState([]);
    // const searchProducts = document.getElementById('search-product-list');

    function getProducts() {
        ref.onSnapshot((querySnapShot) => {
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
            <ul onBlur={() => console.log('1')} id="search-product-list">
                {value
                    ? filteredData.map((product) => (
                          <Link to={`/products/${product.id}`}>
                              <li key={product.id}>
                                  <img src={product.image} alt="" />
                                  <span>{product.name}</span>
                              </li>
                          </Link>
                      ))
                    : ''}
            </ul>
        </>
    );
}

export default SearchList;
