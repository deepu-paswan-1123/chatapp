import React, { useContext,useEffect,useState } from 'react';
import { Box,styled } from '@mui/material';
import Footer from './Footer';
import { AccountContext } from '../../context/AccountProvider';
import { newMessage } from '../../service/Api';
import { getMessages } from '../../service/Api';
import ShowMessage from './ShowMessage';

const Wrapper=styled(Box)`
    background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size:50%;


`

const Component=styled(Box)`
    height:73vh;
    overflow-y:scroll;
`

const Wrap=styled(Box)`
    padding:1px 80px;
`

const Messages = ({person,conversation}) => {

    console.log("person message",person)
    console.log("conversatio message",conversation)
    const [FooterText,setFooterText] = useState('');
    const [messages, setMessages] = useState([]);
    const{account} = useContext(AccountContext);
    const [newMessageFlag,setnewMessageFlag]=useState(false);
   

    
    useEffect(() => {
        const getMessagesDetails = async () => {
            if (conversation && conversation._id) {  
                const data = await getMessages(conversation._id);  
                console.log("Fetched messages:", data);
                setMessages(data);  // Update the state with fetched messages
            } else {
                console.log("No conversation._id available");
            }
        };
        conversation._id && getMessagesDetails();
    }, [conversation._id, person._id, newMessageFlag]);
    

  
    const SendText = async (e) => {
        const Code = e.keyCode || e.which;
        console.log(e)
        if (Code === 13) {
            const messages = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: FooterText,
            };
            console.log("this is the senderText ",messages);
            await newMessage(messages);
            setFooterText(''); // Clear the input field
           
            setnewMessageFlag(prev => !prev);
        }

    };


    return (
        <>
            <Wrapper>
                <Component>
                    {
                        messages && messages.length > 0 ? (
                            messages.map(message => (
                                <Wrap key={message._id}>
                                    <ShowMessage message={message} />
                                </Wrap>
                            ))
                        ) : (
                            <div>No messages available</div>
                        )
                    }
                </Component>
                <Footer 
                    SendText={SendText} 
                    setFooterText={setFooterText}
                    FooterText={FooterText}
                />
            </Wrapper>
        </>
    );
}


export default Messages;


















