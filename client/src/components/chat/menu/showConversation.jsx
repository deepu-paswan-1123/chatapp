import React, { useContext,useEffect } from 'react';
import { Typography,Box } from '@mui/material';
import {styled} from '@mui/material';
import { AccountContext } from '../../context/AccountProvider';
import { setConversation } from '../../service/Api';
import { UserContext } from '../../context/UserProvider';

const ConversationComponent=styled(Box)`
    display:flex;
    height:45px;
    padding:13px 0;
    cursor:pointer;
`

const Image=styled('img')({
    height:50,
    width:50,
    borderRadius:'50%',
    padding:'0 14px',
})




const ShowConversation = ({user}) => {

    
    const {account,setAccount}=useContext(AccountContext);
    const {person,setPerson}=useContext(UserContext);


    
    const GetShowUser=async()=>{
        console.log("Reached getshowuser")
        setPerson(user);
        console.log("tis is show conversation",person);
        console.log("user in show conversaton",user);
        console.log("account in show conversation",account);
        await setConversation({senderId:account.sub,receiverId:user.sub });
    }
    
    // useEffect(() => {
    //     console.log(person);
    // }, [person]); // This will log whenever `person` is updated
    

    return (
        <ConversationComponent onClick={()=> GetShowUser()}>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </ConversationComponent>
    );
}

export default ShowConversation;
