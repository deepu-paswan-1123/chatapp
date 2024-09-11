import React, { useContext } from 'react';
import { Box,styled,Typography } from '@mui/material';
import { AccountContext } from '../context/AccountProvider';

const ImageContainer=styled(Box)`
    display:flex;
    justify-content:center;
    align-items:center;

`;

const ProfileImage=styled('img')({
    width:150,
    height:150,
    borderRadius:'50%',
    padding:'20px 0'    
});

const BoxWrapper=styled(Box)`
    background:#FFFFFF;
    padding:12px 30px 2px;
    box-shadow:0 1px 3px rgba(0,0,0,0.08);

    & : first-child {
        font-size:13px;
        color:#009688;
        font-weight:200;
    }

    & : last-child {
        margin: 14px 0;
        color:#4A4A4A;
    }
`

const DescriptionContainer=styled(Box)`
    padding:15px 20px 20px  30px;

    & > p {
        font-size:13px;
        color:#8696a0;
    }
`
const Profile = () => {
    const {account}=useContext(AccountContext);
    return (
        <>
           <ImageContainer>
                <ProfileImage src={account.picture} alt="dp" />
           </ImageContainer>
           <BoxWrapper>
                <Typography>your name</Typography>
                <Typography>{account.name}</Typography>
           </BoxWrapper>
           <DescriptionContainer>
                <Typography>This is not your username or pin.This name will be visible to your whatsapp contacts.</Typography>
           </DescriptionContainer>
           <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Do good and get good </Typography>
           </BoxWrapper>
        </>
    );
}

export default Profile;
