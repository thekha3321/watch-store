import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './ShopSection.module.scss';
import firebase from '../../../firebase/config';
import Loading from '../../Layout/Loading';
import CardProduct from '../CardProduct';

function ShopSection() {
    const cx = classnames.bind(styles);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [id, setId] = useState('');

    const productsRef = firebase.firestore().collection('products');
    const cartRef = firebase.firestore().collection('cart');

    function getProducts() {
        setLoading(true);
        productsRef.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items);
            setLoading(false);
        });
    }
    const handleBuy = (product) => {
        setName(product.name);
        setBrand(product.brand);
        setImage(product.image);
        setPrice(product.price);
        setDesc(product.desc);
        setId(product.id);
        createDoc({ name, brand, image, price, desc, id });
    };

    const createDoc = async (props) => {
        try {
            await cartRef.doc(props.id).set(props);
            // setIsShowToast(true);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const renderProducts = (
        <div className={cx('inner')}>
            {products.slice(0, 4).map((product, index) => (
                <CardProduct product={product} index={index} handleBuy={handleBuy} />
            ))}
        </div>
    );

    return (
        <div className={cx('wrapper')}>
            <header>Popular Products</header>
            {loading ? <Loading /> : renderProducts}
        </div>
    );
}

export default ShopSection;
