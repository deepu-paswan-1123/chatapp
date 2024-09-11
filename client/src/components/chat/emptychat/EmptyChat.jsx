import React from 'react';
import { styled,Box,Typography,Divider  } from '@mui/material';
import { emptyChatImage } from '../../constants/data';

const Component=styled(Box)`
    background:#f8f9fa;
    padding:20px 0;
    text-align: center;
    height:100vh;
`

const Container=styled(Box)`
    padding:0 100px;

`

const ChatImage=styled('img')({
    width:400,
    marginTop:60,

})

const ChatTitle=styled(Typography)`
    font-size:32px;
    margin:25px 0 10px 0;
    font-family:inherit;
    font-weight:300;
    color:#41525d;
`

const ChatSubTitle=styled(Typography)`
    font-size:14px;
    color:#667781;
    font-family:inherit;
    font-weight:400;
`

const StyleDivider=styled(Divider)`
    margin:40px 0;
    opacity:0.4;
`

const EmptyChat = () => {
    return (
        <>
            <Component>
                <Container>
                    <ChatImage src={emptyChatImage} alt="image" />
                    <ChatTitle>WhatsApp Web</ChatTitle>
                    <ChatSubTitle>Now send and receive messages without keeping your phone online.</ChatSubTitle>
                    <ChatSubTitle>use WhatsApp on upto 4 linked devices and 1 phone at the same time.</ChatSubTitle>
                    <StyleDivider/>
                </Container>
            </Component>
        </>
    );
}

export default EmptyChat;
