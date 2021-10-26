import React, { useState } from 'react';
import {
    Container,
    Card,
    Grid,
    Paper,
    Typography,
    Button,
    TextField,
    Link
} from "@mui/material";
import { useHistory } from 'react-router';
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };
    let history = useHistory();//라우팅
    return (
        <Container sx={{ display: "flex", mt: 20, justifyContent: "center", }}>
            <LoginPaper elevation={2}>
                {/* 엘리베이션 박스뒤에 음영강도 */}
                <div>
                    <PersonIcon />
                </div>
                <Typography variant="h6">Register User</Typography>
                <TextField onChange={(event) => { setRegisterEmail(event.target.value) }}
                    margin="dense" label="아이디" placeholder="your id" />
                <TextField
                    onChange={(event) => { setRegisterPassword(event.target.value) }}
                    margin="dense" label="비밀번호" placeholder="your password" />
                <Button onClick={register} variant="contained" sx={{ mt: 1, color: "#fff" }}>
                    <Typography variant="h6">Sign Up</Typography>
                </Button>
                <Link underline="hover" href="./Signup.js" color="primary.dark" mt={1}>
                    Forgot password?
                </Link>
                <Button onclick={() => {
                    history.push("/login")
                }} underline="hover"
                    href="./Signup.js" mt={1}>already a user?</Button>
            </LoginPaper>

        </Container >
    )
}

export default Signup;


const LoginPaper = styled(Paper)({
    padding: 20,
    width: 260,
    height: 320,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"

})
