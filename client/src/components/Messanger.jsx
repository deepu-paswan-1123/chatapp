import LoginDialog from "./account/LoginDialog";
import {AppBar,Toolbar,styled,Box} from "@mui/material";
import ChatDialog from "./chat/ChatDialog";
import { useContext } from "react";
import { AccountContext } from "./context/AccountProvider";

const Component=styled(Box)`
    height:100vh;
    background-color:#DCDCDC;

`

const Header=styled(AppBar)`
    height:100px;
    background-color:#00bfa5;
    box-shadow:none;

`
const LoginHeader=styled(AppBar)`
    height:200px;
    background-color:#00bfa5;
    box-shadow:none;

`

const Messanger=()=>{

    const {account}=useContext(AccountContext);

    return (
        <Component>
            {   
                account?
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDialog/>
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar>

                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog/>
                </>
            }
        </Component>
    );
}

export default Messanger;