import React from 'react';
import { Button, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, Divider, Link } from '@mui/material';
import { Link as LinkDom } from 'react-router-dom';
import login from '../secure-login.svg';

export const LoginPage = () => {
    return (
        <div className="login_page">
            <div className="login-box-img">
                <h2>Welcome to the Login</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <img src={ login } alt="auth-login" height="350" className="login-img" />
                <Button variant="contained" color="secondary">
                    Get Started
                </Button>
            </div>
            <div className="login-box">
                <Typography variant="h4">Sign in</Typography>
                <form onSubmit={ (e) => { e.preventDefault(); console.log('form sended'); } }>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel htmlFor="email-address">Email address</InputLabel>
                        <OutlinedInput
                            id="email-address"
                            /* value={values.amount} */
                            /* onChange={handleChange('amount')} */
                            startAdornment={<InputAdornment position="start">@</InputAdornment>}
                            label="Email address"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel htmlFor="field-pass">Password</InputLabel>
                        <OutlinedInput
                            id="field-pass"
                            type="password"
                            /* value={values.amount} */
                            /* onChange={handleChange('amount')} */
                            startAdornment={<InputAdornment position="start">?</InputAdornment>}
                            label="Password"
                        />
                    </FormControl>
                    <Button variant="contained" color="success" type="submit">
                        Log in
                    </Button>
                    <Divider style={{ width: '100%', marginTop: '1.5rem' }} />
                </form>
                <Typography variant="subtitle2" marginTop={ 1 }>
                    Don't have an account yet? <LinkDom to="/register"><Link underline="hover">Create a new account here</Link></LinkDom>
                </Typography>
            </div>
        </div>
    )
}
