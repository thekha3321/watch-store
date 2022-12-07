import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase/config';
import classNames from 'classnames/bind';
import styles from './Search.css';
import SearchList from './SearchList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ref = firebase.firestore().collection('products');

function Search() {
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState('');
    let isBlur;
    const input = document.querySelector('.search-input');

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

    const inputHandle = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setValue(lowerCase);
    };

    return (
        <div>
            <div className="search-box">
                <input placeholder="Search..." className="search-input" onChange={inputHandle} />
                {value && (
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="icon"
                        onClick={() => {
                            setValue('');
                            input.value = '';
                        }}
                    />
                )}
                <SearchList id="search-list" isBlur={isBlur} value={value} input={input} />
            </div>
        </div>
    );
}

export default Search;
