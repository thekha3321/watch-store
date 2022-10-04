import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../firebase/config';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const cx = classnames.bind(styles);

const ref = firebase.firestore().collection('users');

const notiUser = document.getElementById('notiuser');
const notiPassword = document.getElementById('notipassword');
const notiPasswordConfirm = document.getElementById('notipasswordconfirm');
const notiAddress = document.getElementById('notiaddress');
const notiPhone = document.getElementById('notiphone');

function Register() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    // const [createUserWithEmailAndPassword, userr, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const createDoc = (newDataObj) => {
        alert('Thêm sản phẩm thành công');
        ref.doc(newDataObj.id).set(newDataObj);
    };

    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <form className={cx('form')}>
                        <div className={cx('container')}>
                            <h1 className={cx('heading')}>Đăng ký</h1>
                            <label htmlFor="user" className={cx('title')}>
                                Email
                            </label>
                            <input
                                onChange={(e) => setUser(e.target.value)}
                                // onBlur={() => {
                                //     user.length > 0
                                //         ? (notiUser.innerHTML = 'Mời tiếp tục nhập')
                                //         : (notiUser.innerHTML = 'Mục này không được để trống');
                                // }}
                                type="text"
                                placeholder="Email"
                                className={cx('input')}
                                id="user"
                            />
                            <span id="notiuser"></span>
                            <label htmlFor="password" className={cx('title')}>
                                Mật Khẩu
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => {
                                    password.length > 0
                                        ? (notiPassword.innerHTML = '')
                                        : (notiPassword.innerHTML = 'Mục này không được để trống');
                                }}
                                type="password"
                                placeholder="Password"
                                className={cx('input')}
                                id="password"
                            />
                            <span id="notipassword"></span>
                            <label htmlFor="passwordConfirm" className={cx('title')}>
                                Xác nhận mật khẩu
                            </label>
                            <input
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                onBlur={() => {
                                    password === passwordConfirm
                                        ? (notiPasswordConfirm.innerHTML = 'Mật khẩu trùng khớp')
                                        : (notiPasswordConfirm.innerHTML = 'Mật khẩu không trùng khớp');
                                }}
                                type="password"
                                placeholder="Password"
                                className={cx('input')}
                                id="passwordconfirm"
                            />
                            <span id="notipasswordconfirm"></span>
                            <label htmlFor="phone" className={cx('title')}>
                                Số điện thoại
                            </label>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                onBlur={() => {
                                    phone.length > 0
                                        ? (notiPhone.innerHTML = '')
                                        : (notiPhone.innerHTML = 'Mục này không được để trống');
                                }}
                                type="text"
                                placeholder="0123..."
                                className={cx('input')}
                                id="phone"
                            />
                            <span id="notiphone"></span>
                            <label htmlFor="address" className={cx('title')}>
                                Địa chỉ hiện tại
                            </label>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                onBlur={() => {
                                    address.length > 0
                                        ? (notiAddress.innerHTML = '')
                                        : (notiAddress.innerHTML = 'Mục này không được để trống');
                                }}
                                type="text"
                                placeholder="VD: Đà Nẵng..."
                                className={cx('input')}
                                id="address"
                            />
                            <span id="notiaddress"></span>
                            <div
                                className={cx('btn')}
                                onClick={() => {
                                    createDoc({ user, passwordConfirm, address, phone, id: uuidv4() });
                                    document.getElementById('user').value = '';
                                    document.getElementById('passwordconfirm').value = '';
                                    document.getElementById('phone').value = '';
                                    document.getElementById('address').value = '';
                                }}
                            >
                                Đăng ký
                            </div>
                            <p>
                                <Link to="/login">
                                    I have Account <strong>Đăng Nhập</strong>
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
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>

//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
