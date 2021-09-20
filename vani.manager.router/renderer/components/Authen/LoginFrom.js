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
    const [errorAuthen, setErrorAuthen] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        console.log(password);
        let post = {
            user,
            password
        }
        let response = await fetch('http://localhost:8888/api/authentication', {
            method: 'POST',
            body: JSON.stringify(post),
        });

        // get the data
        let data = await response.json();
        console.log(data);

        // fetch('http://localhost:8888/api/authen', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         user,
        //         password
        //     })
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         !data.code && setErrorAuthen(true);
        //         if (data.code) {
        //             console.log(data);
        //         }
        //     })

        //const json = a.json();
        //console.log(json);
        // fetch('/api/authen', {
        //     method: 'POST',
        //     body:JSON.stringify({
        //         user,
        //         password
        //     })
        // })
        // .then(response => response.json())
        // .then(data =>{
        //     !data.code && setErrorAuthen(true);
        //     if(data.code){
        //         console.log(data);
        //     }
        // })

    }

    // login.getInitialProps = async ()=>{
    //     const a= await fetch('http://localhost:8888/api/hello');
    //     const json = await a.json();
    //     console.log(json);
    // }
    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <TextField required id="outlined-basic" label="Số điện thoại hoặc tên đăng nhập" variant="outlined" onChange={(e) => setUser(e.target.value)} />
                <TextField required id="outlined-basic" type="password" label="Mật khẩu" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                <LoadingButton fullWidth color="success" className={styleL.btnLogin} size="large" type="submit" variant="contained">Đăng nhập</LoadingButton>
            </Stack>
        </form>
    );
}