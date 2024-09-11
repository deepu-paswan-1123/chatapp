import React, { useState } from 'react';
import { Box,styled,InputBase } from '@mui/material';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/Mic';


const Container=styled(Box)`
    height:63px;
    background:#ededed;
    display:flex;
    align-items:center;
    width:100%;
    padding:0 15px;

    & > * {
        margin:5px;
        color:#919191;
    }
`;

const Search=styled(Box)`
    background:#FFFFFF;
    border-radius:5px;
    width:calc(94% - 100px);
`;
const InputField=styled(InputBase)`
    width:100%;
    padding:20px;
    height:20px;
    font-size:14px;
`;

const ClipIcon=styled(AttachFileOutlinedIcon)`
    transform:rotate(40deg)
`


const Footer = ({SendText,setFooterText,FooterText}) => {
    
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default action (e.g., new line)
            SendText(e); // Pass the event object to SendText
            setFooterText(''); // Clear the input field
            
        }
    };

   
    return (
        <Container>
            <InsertEmoticonOutlinedIcon />
            <ClipIcon />
            <Search>
                <InputField 
                    placeholder="Type a message" 
                    onChange={(e)=>setFooterText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={FooterText}
                    
                />
            </Search>
            <MicIcon />
        </Container>
    );
};


export default Footer;
