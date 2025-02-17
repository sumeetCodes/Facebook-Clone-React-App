
import { Box } from '@mui/material';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { Link } from 'react-router-dom';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const HeaderFileComponent = () => {



    return (
       <>
    
<nav>
    <Box>

   <Box className="d-flex bg-light mb-3 p-2 justify-content-between align-items-center">

{/* first */}

<Box>
    {/* facebook logo */}
<FacebookOutlinedIcon className="text-primary mx-1 fs-1" />
{/* search Icon */}
<SearchRoundedIcon className="fs-2 border rounded-circle p-1"/>
</Box>

{/* second */}

<Box>

{/* Home icon */}
<Link to="/">
<HomeOutlinedIcon className='fs-2 mx-2' />
</Link>

{/* Friends tab icon */}

<Link to="/friends">
<GroupOutlinedIcon className='fs-2 text-secondary' />
</Link>

</Box>


{/* third */}

<Box>

{/* menu */}
<AppsOutlinedIcon className="fs-2 mx-1 border rounded-circle p-1" />

{/* messenger */}
<InsertCommentRoundedIcon className="fs-2 mx-1 border rounded-circle p-1" />

{/* bell icon */}

<NotificationsActiveRoundedIcon className="fs-2 mx-1 border rounded-circle p-1" />

{/* account */}
<AccountCircleIcon className="fs-2 border rounded-circle p-1" />

</Box>

    </Box>
    </Box> 
    </nav>    

       
       </>
    );
};

export default HeaderFileComponent;




