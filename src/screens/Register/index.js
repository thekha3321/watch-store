import React from 'react';
import classnames from 'classnames/bind';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import { useState } from 'react';

function Register({ title, setEmail, setPassword, handleAction, setName, setAddress, setPhone }) {
    const cx = classnames.bind(styles);
    const handleSubmit = () => {};

    const [isValid1, setIsValid1] = useState(false);
    const [isValid2, setIsValid2] = useState(false);
    const [isValid3, setIsValid3] = useState(false);
    const [isValid4, setIsValid4] = useState(false);
    const [isValid5, setIsValid5] = useState(false);
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <form onSubmit={handleSubmit} className={cx('form')}>
                        <div className={cx('container')}>
                            <h1 className={cx('heading')}>{title}</h1>
                            <label htmlFor="user" className={cx('title')}>
                                Email
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={(e) =>
                                    e.target.value.length === 0
                                        ? ((document.getElementById('notiuser').innerText =
                                              'Mục này không được để trống'),
                                          setIsValid1(false))
                                        : ((document.getElementById('notiuser').innerText = ''), setIsValid1(true))
                                }
                                type="text"
                                placeholder="Email"
                                className={cx('input')}
                                id="user"
                            />
                            <span style={{ color: 'red', fontSize: 12 }} id="notiuser"></span>
                            <label htmlFor="password" className={cx('title')}>
                                Password
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={(e) =>
                                    e.target.value.length === 0
                                        ? ((document.getElementById('notipassword').innerText =
                                              'Mục này không được để trống'),
                                          setIsValid2(false))
                                        : ((document.getElementById('notipassword').innerText = ''), setIsValid2(true))
                                }
                                type="password"
                                placeholder="Password"
                                className={cx('input')}
                                id="password"
                            />
                            <span style={{ color: 'red', fontSize: 12 }} id="notipassword"></span>
                            <label htmlFor="name" className={cx('title')}>
                                Tên
                            </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                onBlur={(e) =>
                                    e.target.value.length === 0
                                        ? ((document.getElementById('notiname').innerText =
                                              'Mục này không được để trống'),
                                          setIsValid3(false))
                                        : ((document.getElementById('notiname').innerText = ''), setIsValid3(true))
                                }
                                type="text"
                                placeholder="Name"
                                className={cx('input')}
                                id="name"
                            />
                            <span style={{ color: 'red', fontSize: 12 }} id="notiname"></span>

                            <label htmlFor="name" className={cx('title')}>
                                Address
                            </label>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                onBlur={(e) =>
                                    e.target.value.length === 0
                                        ? ((document.getElementById('notiaddress').innerText =
                                              'Mục này không được để trống'),
                                          setIsValid4(false))
                                        : ((document.getElementById('notiaddress').innerText = ''), setIsValid4(true))
                                }
                                type="text"
                                placeholder="Address"
                                className={cx('input')}
                                id="addr"
                            />
                            <span style={{ color: 'red', fontSize: 12 }} id="notiaddress"></span>

                            <label htmlFor="name" className={cx('title')}>
                                Phone number
                            </label>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                onBlur={(e) =>
                                    e.target.value.length === 0
                                        ? ((document.getElementById('notiphone').innerText =
                                              'Mục này không được để trống'),
                                          setIsValid5(false))
                                        : ((document.getElementById('notiphone').innerText = ''), setIsValid5(true))
                                }
                                type="text"
                                placeholder="+84"
                                className={cx('input')}
                                id="phone"
                            />
                            <span style={{ color: 'red', fontSize: 12 }} id="notiphone"></span>

                            <button
                                type="submit"
                                id="btn"
                                variant="contained"
                                onClick={(e) => {
                                    e.preventDefault();
                                    isValid1 && isValid2 && isValid3 && isValid4 && isValid5 && handleAction(2);
                                }}
                                className={cx('btn')}
                            >
                                {title}
                            </button>
                            <p>
                                <Link to="/login">
                                    I have an account ?<strong>Log in</strong>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
