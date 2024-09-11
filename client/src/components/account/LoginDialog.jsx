import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../constants/data";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"; // Correctly import jwtDecode as a named export
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import { AddUser } from "../service/Api";
// import addUser from "../../../../server/controllers/User.controllers";

const Component = styled(Box)`
    display: flex;
`

const Container = styled(Box)`
    padding: 56px 0 56px 10px;
`

const QRCode = styled('img')({
    height: 220,
    width: 220,
    margin: '50px 0 0 50px'
})

const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
    }
`

const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 20px;
`

const dialogstyle = {
    height: '90%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialog = () => {

    const {setAccount}=useContext(AccountContext);


    const onLoginSuccess = async(res) => {
        const decoded = jwtDecode(res.credential); // Correctly decode the token
        console.log("Decoded JWT:", decoded); // Use or log the decoded token to avoid the warning
        setAccount(decoded);
        await AddUser(decoded);
        // await addUser(decoded);
       

    }
    
    const onLoginError = (res) => {
        console.log("Login Failed ", res);
    }
    
    return (
        <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
            <Component>
                <Container>
                    <ListItem><Title>To use WhatsApp on your computer:</Title></ListItem>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>
                <Box sx={{ position: 'relative' }}>
                    <QRCode src={qrCodeImage} alt="QR Code" />
                    <Box sx={{ position: 'absolute', left: '55px', top: '50%' }}>
                        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    );
}

export default LoginDialog;
