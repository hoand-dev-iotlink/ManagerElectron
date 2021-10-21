import { useState } from 'react';
import { Stack, TextField, Alert, Snackbar } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import styleL from '../../styles/login.module.css';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function LoginFrom() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorAuthen, setErrorAuthen] = useState('');
    const router = useRouter();
    const validationSchema = Yup.object().shape({
        user: Yup.string()
            .required('Vui lòng nhập số điện thoại hoặc tên đăng nhập')
            .min(5, 'Vui lòng nhập phải trên 5 ký tự'),
        password: Yup.string()
            .min(5, 'Vui lòng nhập mật khẩu phải trên 5 ký tự')
            .required('Vui lòng nhập mật khẩu'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     let post = {
    //         user,
    //         password
    //     }
    //     let response = await fetch('http://localhost:8888/api/authentication', {
    //         method: 'POST',
    //         body: JSON.stringify(post),
    //     });

    //     // get the data
    //     let data = await response.json();
    //     if (data.code && data.token) {
    //         //set cookie
    //         cookie.set('token', data.token, { expires: 2 });
    //         router.push('/home');
    //     } else {
    //         setErrorAuthen(data.message)
    //     }
    // }

    async function formSubmit(data) {

        let post = {
            user,
            password
        }
        let response = await fetch('http://localhost:8888/api/authentication', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        // get the data
        let datare = await response.json();
        if (datare.code && datare.token) {
            //set cookie
            cookie.set('token', datare.token, { expires: 2 });
            router.push('/home');
        } else {
            setErrorAuthen(datare.message)
        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setErrorAuthen('');
    };

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <Stack spacing={3}>
                <TextField required error={Boolean(errors.user)} {...register('user')}
                    id="outlined-basic" label="Số điện thoại hoặc tên đăng nhập"
                    variant="outlined" //onChange={(e) => setUser(e.target.value)}
                    helperText={errors.user?.message}
                />
                <TextField required error={Boolean(errors.password)} {...register('password')}
                    id="outlined-basic" type="password" label="Mật khẩu"
                    variant="outlined" //onChange={(e) => setPassword(e.target.value)}
                    helperText={errors.password?.message}
                />
                <LoadingButton fullWidth color="success" className={styleL.btnLogin} size="large" type="submit" variant="contained">Đăng nhập</LoadingButton>
            </Stack>
            {errorAuthen &&
                <Snackbar open={errorAuthen} autoHideDuration={3000} onClose={handleClose} anchorOrigin={ { vertical: 'bottom', horizontal: 'center' }}>
                    <Alert severity="error" sx={{ width: '100%' }}>
                        {errorAuthen}
                    </Alert>
                </Snackbar>}
        </form>
    );
}