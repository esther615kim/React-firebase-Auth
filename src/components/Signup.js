import React from 'react';
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
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';

function Signup() {
    return (
        <Container sx={{ display: "flex", mt: 20, justifyContent: "center", }}>
            <LoginPaper elevation={2}>
                {/* 엘리베이션 박스뒤에 음영강도 */}
                <div>
                    <PersonIcon />
                </div>
                <Typography variant="h6">Register User</Typography>
                <TextField margin="dense" label="아이디" placeholder="your id" />
                <TextField margin="dense" label="비밀번호" placeholder="your password" />
                <Button variant="contained" sx={{ mt: 1, color: "#fff" }}>
                    <Typography variant="h6">Login</Typography>
                </Button>
                <Link underline="hover" href="./Signup.js" color="primary.dark" mt={1}>
                    Forgot password?
                </Link>
                <Link underline="hover"
                    href="./Signup.js" mt={1}>already a user?</Link>
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
