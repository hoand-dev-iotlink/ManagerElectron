import * as React from "react";
import { useState } from 'react';
import { Stack, TextField, Alert, Snackbar,Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import styleL from '../../styles/home.module.css';
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function FormTwoContent(){

    const [errorAuthen, setErrorAuthen] = useState('');
    const router = useRouter();
    const validationSchema = Yup.object().shape({
        user: Yup.string()
            .required('Vui lòng nhập số điện thoại hoặc tên đăng nhập')
            .min(5, 'Vui lòng nhập phải trên 5 ký tự'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    function formSubmit(data){
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(formSubmit)} style={{width:"100%",display: "flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}> 
            
            <Typography variant="h5" sx={{ mt: 5, mb: 5 }}>
                THÊM PHỤC LỤC 3
                                </Typography>
            <Stack spacing={1} sx={{width:"100%"}}>
                <TextField required error={Boolean(errors.user)} {...register('user')}
                    id="outlined-basic" label="Số điện thoại hoặc tên đăng nhập"
                    variant="outlined" //onChange={(e) => setUser(e.target.value)}
                    helperText={errors.user?.message}
                />
                <LoadingButton fullWidth color="success" className={styleL.btnsave} size="large" type="submit" variant="contained">Đăng nhập</LoadingButton>
            </Stack>
        </form>
    )
}