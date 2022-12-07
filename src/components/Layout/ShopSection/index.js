import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './ShopSection.module.scss';
import { Link } from 'react-router-dom';
import firebase from '../../../firebase/config';
import Loading from '../../Layout/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
            {products.map((product, index) => (
                <div key={index} className={cx('product')} to={`/products/${product.id}`}>
                    <div className={cx('top')}>
                        <img className="product-img" src={product.image} alt="" />
                        <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                    </div>
                    <div className={cx('bottom')}>
                        <div className={cx('star-box')}>
                            <li>
                                <FontAwesomeIcon className={cx('icon-star')} icon={faStar} />
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('icon-star')} icon={faStar} />
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('icon-star')} icon={faStar} />
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('icon-star')} icon={faStar} />
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('icon-star')} icon={faStar} />
                            </li>
                        </div>
                        <div className={cx('product-name')}>{product.brand}</div>
                        <div className={cx('product-price')}>
                            {`${new Intl.NumberFormat('de-DE').format(product.price)} đ`}
                        </div>
                        <button
                            onClick={() => {
                                setName(product.name);
                                setBrand(product.brand);
                                setImage(product.image);
                                setPrice(product.price);
                                setDesc(product.desc);
                                setId(product.id);
                                createDoc({ name, brand, image, price, desc, id });
                            }}
                            className={cx('btn')}
                        >
                            Add to cart
                        </button>
                        <Link to={`/products/${product.id}`} className={cx('detail')}>
                            <span>View product</span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className={cx('wrapper')}>
            <header>Featured products</header>
            {loading ? <Loading /> : renderProducts}
        </div>
    );
}

export default ShopSection;
