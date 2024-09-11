import { Dialog,Box,styled } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./emptychat/EmptyChat";
import ChatBox from "./emptychat/ChatBox";
import { AccountContext } from "../context/AccountProvider";
import {UserContext} from "../context/UserProvider"
import { useContext } from "react";

const dialogstyle = {
    height: '95%',
    width: '100%',
    maxWidth: '100%',
    marginTop:'70px',
    borderRadius:0,
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const Component=styled(Box)`
    display:flex;
    gap:10px;

`
const LeftComponent=styled(Box)`
    min-width:450px;
   

`

const RightComponent=styled(Box)`
    width:73%;
    min-width:300px;
    height:100%;
    border-left:1px solid rgba(0,0,0,0.14);
`

const ChatDialog=()=>{

    const {person}=useContext(UserContext);

    return (
        <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true} maxWidth={'md'}>
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <RightComponent>
                    
                    {Object.keys(person).length > 0 ? <ChatBox /> : <EmptyChat />}
                    {/* <ChatBox/> */}
                </RightComponent>
            </Component>
        </Dialog>

    );
}

export default ChatDialog;