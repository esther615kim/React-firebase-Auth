import React from 'react';
import {
    Container,
    Grid,
    Avatar,
    Paper,
    Typography,
    Button,
    Link,
    TextField
} from "@mui/material";
import GoogleButton from './GoogleButton';
import { styled } from '@mui/system';
import { useHistory } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import {
    signInWithEmailAndPassword
} from 'firebase/auth';

function Login() {

    // const [loginEmail, setRegisterEmail] = useState("");
    // const [loginPassword, setRegisterPassword] = useState("");
    // // const [user, setUser] = useState("");//App에서 props로 받기 


    // const login = async () => {
    //     try {
    //         const user = await signInWithEmailAndPassword(
    //             auth,
    //             loginEmail,
    //             loginPassword
    //         )
    //         console.log(user);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };
    let history = useHistory();

    return (
        <Container sx={{ display: "flex", mt: 20, justifyContent: "center", }}>
            <LoginPaper elevation={2}>
                {/* 엘리베이션 박스뒤에 음영강도 */}
                <div>
                    <PersonIcon />
                </div>
                <Typography variant="h6">LOG IN</Typography>
                <TextField margin="dense" label="아이디" placeholder="your id" />
                <TextField margin="dense" label="비밀번호" placeholder="your password" />
                <Button variant="contained" sx={{ mt: 1, color: "#fff" }}>
                    <Typography variant="h6">Login</Typography>
                </Button>
                <Button underline="hover" color="primary.dark" mt={1}>
                    Forgot password?
                </Button>
                <GoogleButton />

                <Button onclick={() => {
                    history.push("/signup")
                }} underline="hover"
                    href="./Signup.js"
                    mt={1}>not registered yet?
                </Button>
            </LoginPaper>
        </Container >
    )
}

export default Login;


const LoginPaper = styled(Paper)({
    padding: 20,
    width: 260,
    height: 320,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"
})