//import { Form } from "formik";
import { useState } from 'react';
import {
    Link,
    Stack,
    Checkbox,
    TextField,
    IconButton,
    InputAdornment,
    FormControlLabel,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import styleL from '../../styles/login.module.css';

export default function LoginFrom() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        console.log(user);
        console.log(password);

    }
    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <TextField required id="outlined-basic" label="Số điện thoại hoặc tên đăng nhập" variant="outlined" onChange={(e)=>setUser(e.target.value)} />
                <TextField required id="outlined-basic" type="password" label="Mật khẩu" variant="outlined" onChange={(e)=>setPassword(e.target.value)} />
                <LoadingButton fullWidth color="success" className={styleL.btnLogin} size="large" type="submit" variant="contained">Đăng nhập</LoadingButton>
            </Stack>
        </form>
    );
}