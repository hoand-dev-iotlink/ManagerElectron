import React from 'react';
import Link from 'next/link';
import LayoutAccount from '../layouts/LayoutAccount';
import StyleU from '../styles/login.module.css'
import fetch from 'isomorphic-unfetch'

import { Card, Stack, Container, Typography } from '@mui/material';
import { display } from '@mui/system';
import LoginFrom from '../components/Authen/loginFrom';
import useSWR from 'swr';
import { useRouter } from 'next/router';


const login = () => {
    const router = useRouter();
    const { data, revalidate } = useSWR('/api/authentication', async function (args) {
        const res = await fetch(args);
        // let a =await res.json();
        // console.log(a);
        // let aa= a.exp * 1000 < Date.now();
        // if()
        return await res.json();
    });
    if(data){
        if(data.exp * 1000 > Date.now()){
            router.push("/home");
        }
    }
    // if (!data) return <h1>Loading...</h1>;
    // let loggedIn = false;
    // if (data.email) {
    //     loggedIn = true;
    // }

    return (
        <LayoutAccount>
            <React.Fragment>
                <div style={{ display: 'flex' }}>
                    <Card className={StyleU.boxCard}>
                        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                            Hệ thống quản lý
                        </Typography>
                        <img src="/static/illustrations/illustration_login.png" alt="login" />
                    </Card>
                    <Container maxWidth="sm">
                        <div className={StyleU.content}>
                            <Stack sx={{ mb: 5 }}>
                                <Typography variant="h4" gutterBottom>
                                    Đăng nhập
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>Nhập tên đăng nhập và mật khẩu.</Typography>
                            </Stack>
                            <LoginFrom></LoginFrom>
                        </div>

                    </Container>
                </div>
            </React.Fragment>
        </LayoutAccount>

    );
};
export default login;
