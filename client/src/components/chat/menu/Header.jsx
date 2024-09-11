// import React, { useState } from 'react';
// import { useContext } from 'react';
// import { AccountContext } from '../../context/AccountProvider';
// import { Box,styled } from '@mui/material';
// import ChatIcon from '@mui/icons-material/Chat';
// import HeaderMenu from './HeaderMenu';
// import InforDrawer from '../../drawer/InforDrawer';


// const Component=styled(Box)`
//     height:44px;
//     background-color:#ededed;
//     padding:8px 16px;
//     display:flex;
//     align-items:center;
    

// `

// const Wrapper=styled(Box)`
//     margin-left:auto;
//     & > *{
//         margin-left:3px;
//     }
//     & : first-child{
//         font-size:22px;
//         margin-right:10px;
//         margin-top:3px;
//     }
// `
// const Image=styled('img')({
//     height:'40px',
//     width:'40px',
//     borderRadius:'50%',
//     cursor:'pointer'
// })



// const Header = () => {
//     const {account}=useContext(AccountContext);

//     const[openDrawer,setOpenDrawer]= useState(false);

//     const ToggleDrawer=()=>{
//         setOpenDrawer(true);
//     }

//     return (
//         <>
//           <Component>
//             <Image src={account.picture} alt="dp" onClick={ToggleDrawer}/>
//             <Wrapper>
//                 <ChatIcon/>
//                 <HeaderMenu setOpenDrawer={setOpenDrawer}/>
//             </Wrapper>
//           </Component>
//           <InforDrawer open={openDrawer} setOpen={setOpenDrawer}/>  
//         </>
//     );
// }

// export default Header;



import React, { useState, useContext } from 'react';
import { Box, styled } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from './HeaderMenu';
import InforDrawer from '../../drawer/InforDrawer';
import { AccountContext } from '../../context/AccountProvider';

const Component = styled(Box)`
    height: 44px;
    background-color: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`;

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 3px;
    }
`;

const Image = styled('img')({
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    cursor: 'pointer'
});

const Header = () => {
    const { account } = useContext(AccountContext);

    const [openDrawer, setOpenDrawer] = useState(false);

    const ToggleDrawer = () => {
        setOpenDrawer(true);
    };

    return (
        <>
            <Component>
                <Image src={account.picture} alt="dp" onClick={ToggleDrawer} />
                <Wrapper>
                    <ChatIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
            <InforDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    );
};

export default Header;
