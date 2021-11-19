import { Button, Divider, FormControl, InputLabel, Link, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { CloudQueue, ContactMail, MonetizationOn } from '@mui/icons-material';
import { Link as LinkDom } from 'react-router-dom';
import register from '../content_team.svg';
import React from 'react';

export const RegisterPage = () => {
    return (
        <div className="register_page">
            <div className="header-register">
                <p>Logo</p>
                <div>
                    <a href="https://google.com">Facebook</a>
                    <a href="https://linkedin.com">Linkedin</a>
                </div>
            </div>
            <div className="register_content">
                <div className="register-box-left">
                    <img src={ register } alt="auth-register" height="200" />
                    <p className="title-right">Title custom</p>
                    <div className="box-item">
                        <CloudQueue fontSize="large" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <Divider style={{ width: '100%' }} />
                    <div className="box-item">
                        <ContactMail fontSize="large" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <Divider style={{ width: '100%' }} />
                    <div className="box-item">
                        <MonetizationOn fontSize="large" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="register-box-right">
                    <p>Register Form</p>
                    <form>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <InputLabel htmlFor="email-address">First Name</InputLabel>
                            <OutlinedInput
                                id="first-name"
                                label="First Name"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <InputLabel htmlFor="email-address">Last Name</InputLabel>
                            <OutlinedInput
                                id="last-name"
                                label="Last Name"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <InputLabel htmlFor="email-address">Email address</InputLabel>
                            <OutlinedInput
                                id="email-address"
                                label="Email address"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <InputLabel htmlFor="email-address">Phone</InputLabel>
                            <OutlinedInput
                                id="phone"
                                label="Phone"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <InputLabel htmlFor="email-address">Company</InputLabel>
                            <OutlinedInput
                                id="company"
                                label="Company"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <InputLabel htmlFor="email-address">Job Title</InputLabel>
                            <OutlinedInput
                                id="job-title"
                                label="Job Title"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                /* value={age} */
                                label="Age"
                                /* onChange={handleChange} */
                                defaultValue=""
                            >
                                <MenuItem value="arg">Argentina</MenuItem>
                                <MenuItem value="mex">México</MenuItem>
                                <MenuItem value="per">Perú</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" color="secondary" type="submit">
                            Submit
                        </Button>
                        <Typography variant="subtitle2" marginTop={ 1 }>
                            Do you already have an account? <LinkDom to="/login"><Link href="#" underline="hover">Go to log in here</Link></LinkDom>
                        </Typography>
                    </form>
                </div>
            </div>
        </div>
    )
}
