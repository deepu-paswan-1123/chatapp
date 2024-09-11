import React, { useContext, useEffect, useState } from 'react';
import { getUser } from '../../service/Api';
import {styled,Box,Divider} from '@mui/material';
import ShowConversation from './showConversation';
import  {AccountContext} from '../../context/AccountProvider';

const Component=styled(Box)`
    height:81vh;
    overflowl:overlay;
`;

const StyledDivider=styled(Divider)`
    margin:0 0 0 70px;
    background:#e9edef;
    opacity:.6;
`

const Conversation = ({text}) => {
    const [users, setUsers] = useState([]);
    const { account } = useContext(AccountContext);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await getUser();
    //             if (Array.isArray(response)) {
    //                 // Correctly call toLowerCase() on text
    //                 console.log("response message",response);
    //                 const filteredData = response.filter(user => 
    //                     user.name.toLowerCase().includes(text.toLowerCase())
    //                 );
    //                 setUsers(filteredData);
    //             } else {
    //                 console.error('Expected an array, but got:', response);
    //             }
    //         } catch (error) {
    //             console.error('Failed to fetch users:', error);
    //         }
    //     };
    //     fetchData();
    // }, [text]);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getUser();
            let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(fiteredData);
            
        }
        fetchData();
    }, [text]);


    console.log("this is the users conversation",users);
    console.log("this is the account conversation",account);
    return (
        <Component>
            {Array.isArray(users) && account && users.map(user => (
                // Filter out the logged-in user based on their sub (ID)
                String(user.sub) !== String(account.sub) && (
                    <React.Fragment key={user._id}>
                        <ShowConversation user={user} />
                        <StyledDivider />
                    </React.Fragment>
                )
            ))}
        </Component> 
    );
};

export default Conversation;







