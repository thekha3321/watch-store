import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import firebase from '../../firebase/config';
import { useParams } from 'react-router-dom';

import styles from './SingleProduct.module.scss';
import Loading from '../../components/Layout/Loading';
import Rate from '../../components/Layout/Rate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SingleProduct__() {
    const cx = classNames.bind(styles);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [initContentEvo, setInitContentEvo] = useState([]);
    const { productId } = useParams();
    const productsRef = firebase.firestore().collection('products').where('id', '==', `${productId}`);
    const cartRef = firebase.firestore().collection('cart');

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [id, setId] = useState('');
    // get products
    async function getProducts() {
        setLoading(true);
        await productsRef.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items);
            setInitContentEvo(items[0].contentEvo);
            setLoading(false);
        });
    }
    let product = {
        name: products[0]?.name,
        brand: products[0]?.brand,
        image: products[0]?.image,
        price: products[0]?.price,
        desc: products[0]?.desc,
        id: products[0]?.id,
    };
    // push product to cart
    const createDoc = async () => {
        try {
            await cartRef.doc(products[0].id).set(product);
            toast.success('Successfully!');
        } catch (error) {
            toast.error('Fail!');
        }
    };
    useEffect(() => {
        getProducts();
    }, []);

    const renderproduct = (
        <div className={cx('inner')}>
            <ToastContainer />
            <div className={cx('heading')}>
                <span>products information</span>
            </div>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <img src={products[0]?.image} alt="" />
                </div>
                <div className={cx('right')}>
                    <span className={cx('product-name')}>{products[0]?.name}</span>
                    <span className={cx('product-price')}>${products[0]?.price}</span>
                    <span className={cx('product-description')}>{products[0]?.desc}</span>
                    <button
                        onClick={() => {
                            createDoc();
                        }}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
            <Rate products={products[0]} initContentEvo={initContentEvo} />
            {initContentEvo.map((e) => (
                <div className={cx('product-evo')}>
                    <img className={cx('evoluater-avatar')} src={e.avatar} alt="" />
                    <div className={cx('evoluater-content')}>
                        <div className={cx('evoluater-name', 'fz-18', 'fw-600')}>{e.name}</div>
                        <div className={cx('fl-row')}>
                            <div className={cx('evoluater-rate', 'fz-18')}>{e.rating}</div>
                            <span className={cx('evoluater-name', 'fz-18', 'fw-500')} style={{ marginLeft: 8 }}>
                                {e.ratingDetail}
                            </span>
                        </div>

                        <div className={cx('evoluater-content', 'fz-18')}>{e.value}</div>
                    </div>
                </div>
            ))}
        </div>
    );
    return <div className={cx('wapper')}>{loading ? <Loading /> : renderproduct}</div>;
}

export default SingleProduct__;
