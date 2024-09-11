import React from 'react';
import { Drawer, Box, Typography, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';

const drawerStyle = {
    left: 32.5,
    top: 33,
    height: '95%',
    width: '35.6%',
    boxShadow: 'none',
};

const InfoHeader = styled(Box)`
    background: #008069;
    color: white;
    display: flex;
    height: 100px;
    gap: 10px;
    & > svg, & > p {
        margin-top: auto;
        padding: 10px;
        font-weight: 600;
    }
`;

const InfoComponent = styled(Box)`
    background: #ededed;
    height: 83%;
`;

const Text = styled(Typography)`
    font-size: 18px;
`;

const InforDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <InfoHeader>
                <ArrowBackIcon onClick={handleClose} />
                <Text>Profile</Text>
            </InfoHeader>

            <InfoComponent>
                <Profile />
            </InfoComponent>
        </Drawer>
    );
};

export default InforDrawer;

