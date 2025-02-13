
import { Box } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';


const LeftHomeComponent = () => {
    


    return (
       <>


<Box className="mx-1">

{/* user */}

<Box className="my-2">
    <AccountCircleIcon className="fs-1 p-1" />
    <span className='mx-2 fs-5'>User</span>
</Box>

{/* friends */}

<Box className="my-2">
    <GroupOutlinedIcon className="fs-1 p-1 text-success" />
    <span className='mx-2 fs-5'>Friends</span>
</Box>

{/* facebook icon */}

<Box className="my-2">
    <FacebookOutlinedIcon className="fs-1 p-1 text-primary" />
    <span className='mx-2 fs-5'>Welcome</span>
</Box>

{/* Memories */}

<Box className="my-2">
    <ReplayIcon className="fs-1 p-1 text-primary-emphasis" />
    <span className='mx-2 fs-5'>Memories</span>
</Box>

{/* Saveds */}

<Box className="my-2">
    <BookmarkIcon className="fs-1 p-1 text-danger-emphasis" />
    <span className='mx-2 fs-5'>Saved</span>
</Box>

{/* Groups */}

<Box className="my-2">
    <GroupsIcon className="fs-2 ms-1 p-1 border rounded-circle bg-primary text-light"/>
    <span className='mx-2 fs-5'>Groups</span>
</Box>

{/* Video */}

<Box className="my-2">
    <SmartDisplayIcon className="fs-1 p-1 text-primary" />
    <span className='mx-2 fs-5'>Video</span>
</Box>

{/* marketplace */}

<Box className="my-2">
    <HomeOutlinedIcon className="fs-1 p-1 text-primary" />
    <span className='mx-2 fs-5'>Marketplace</span>
</Box>


{/* Feeds */}

<Box className="my-2">
<Link className='text-decoration-none'>
<AllInboxIcon className="fs-1 p-1 text-primary" />
    <span className='mx-2 fs-5 text-black'>Feeds</span>
</Link>    

</Box>

{/* Events */}

<Box className="my-2">
    <InsertInvitationIcon className="fs-1 p-1 text-danger" />
    <span className='mx-2 fs-5'>Events</span>
</Box>



{/* ads manager */}

<Box className="my-2">
    <EqualizerIcon className="fs-1 p-1 text-primary" />
    <span className='mx-2 fs-5'>Ads Manager</span>
</Box>


{/* see more */}

<Box className="my-2">
    <ExpandCircleDownRoundedIcon className="fs-1 p-1 text-secondary" />
    <span className='mx-2 fs-5'>See more</span>
</Box>

</Box>


       </>
    );
};

export default LeftHomeComponent;

