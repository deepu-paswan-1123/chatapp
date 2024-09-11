// import React, { useContext, useEffect, useState } from 'react';
// import { Box } from '@mui/material';
// import ChatHeader from './ChatHeader';
// import Messages from './Messages';
// import { AccountContext } from '../../context/AccountProvider';
// import { getConversation } from '../../service/Api';

// const ChatBox = () => {

    
//     const {person,account}=useContext(AccountContext);
//     const [conversation,setConversation] = useState({});

//     useEffect(()=>{
//         const getConversationDetails= async()=>{
//             const data = await getConversation({senderId:account.sub ,receiverId:person.sub })
//             // console.log(data);
//             setConversation(data);
//         }
//         getConversationDetails();
//     },[person.sub]);

//     return (
//         <Box>
//             <ChatHeader person={person}/>
//             <Messages person={person} conversation={conversation} />
//         </Box>
//     );
// }

// export default ChatBox;











import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { AccountContext } from '../../context/AccountProvider';
import { getConversation } from '../../service/Api';
import { UserContext } from '../../context/UserProvider';

const ChatBox = () => {
    const { person } = useContext(UserContext);
    const { account } = useContext(AccountContext);
    const [conversation, setConversation] = useState({});
    const [conversationIds, setConversationIds] = useState({ senderConversationId: '', receiverConversationId: '' });
    
    
    // useEffect(() => {
    //     const fetchConversationDetails = async () => {
    //         try {
    //             console.log("chatbox person",person);
    //             console.log("chatbox account",account);
    //             const data = await getConversation({ senderId: account.sub, receiverId: person.sub });
    //             console.log("<<<<<<<<<<",data)
    //             setConversation(data);
    //             // console.log("conversation id",{conversation:conversation._id}); //here this is setproperly
                
    //         } catch (error) {
    //             console.error("Error fetching conversation details:", error.message);
    //         }
    //     };
    //     fetchConversationDetails();
    // }, [person.sub]);
    
    
    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub]);

    console.log("this is chatbox conversaton ",conversation);
    return (
        <Box>
            <ChatHeader person={person} />
            <Messages
                person={person}
                conversation={conversation}
                // conversationIds={conversationIds}
            />
        </Box>
    );
}

export default ChatBox;

