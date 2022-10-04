import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminProducts.module.scss';
import AdminSibar from './../../components/adminlayout/AdminSidebar';
import AdminHeader from '../../components/adminlayout/AdminHeader/AdminHeader';
import firebase from '../../firebase/config';
import AdminAddProduct from '../AdminAddProduct';
import AdminEditProduct from '../../components/adminlayout/AdminEditProduct/index.js';
import AdminShowProducts from '../../components/adminlayout/AdminShowProducts';
import Loading from '../../components/Layout/Loading';

const cx = classNames.bind(styles);

const ref = firebase.firestore().collection('products');

function AdminProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    function getProducts() {
        setLoading(true)
        ref.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            setProducts(items);
            setLoading(false)
        });
    }

    useEffect(() => {
        getProducts();
    }, []);
    const renderProducts = (
        <div className={cx('product-info')}>
                        <div className={cx('heading')}>Tất cả sản phẩm </div>
                        <div className={cx('content')}>
                            <div className={cx('top')}>
                                <div className={cx('product-title')}>hình ảnh </div>
                                <div className={cx('product-title')}>tên sản phẩm</div>
                                <div className={cx('product-title')}>giá</div>
                                <div className={cx('product-title')}>hành động</div>
                            </div>
                            {products.map((product) => (
                                // <div key={product.id} className={cx('bottom')}>
                                //     <div className={cx('product-title')}>
                                //         <img src={product.image} alt="" />
                                //     </div>
                                //     <div className={cx('product-title')}>{product.name}</div>
                                //     <div className={cx('product-title')}>{product.price}</div>
                                //     <div className={cx('product-title')}>
                                //         <button onClick={() => setEditbox(true)}>sửa</button>
                                //         <button>xóa</button>
                                //     </div>
                                //     {/* {editbox === true && <AdminEditProduct products={products} setEditbox={setEditbox}/>} */}
                                // </div>
                                <AdminShowProducts product={product} />
                            ))}
                        </div>
                    </div>
    )
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <AdminSibar />
                <div className={cx('container')}>
                    <AdminHeader />
                    {loading ? <Loading/> : renderProducts}
                </div>
            </div>
        </div>
    );
}
export { ref };
export default AdminProducts;
