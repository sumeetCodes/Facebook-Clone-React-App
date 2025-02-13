
import { Box } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import ReplayIcon from '@mui/icons-material/Replay';




const LeftHomeComponent = () => {
    


    return (
       <>


<Box>

{/* user */}

<Box>
    <AccountCircleIcon className="fs-1 p-1" />
    <span className='mx-2 fs-5'>User</span>
</Box>

{/* friends */}

<Box>
    <GroupOutlinedIcon className="fs-1 p-1 text-success" />
    <span className='mx-2 fs-5'>Friends</span>
</Box>

{/* facebook icon */}

<Box>
    <ReplayIcon className="fs-1 p-1 text-primary" />
    <span className='mx-2 fs-5'>Welcome</span>
</Box>

{/* Memories */}

<Box>
    <GroupOutlinedIcon className="fs-1 p-1" />
    <span className='mx-2 fs-5'>Memories</span>
</Box>

{/* Saveds */}

<Box>
    <GroupOutlinedIcon className="fs-1 p-1" />
    <span className='mx-2 fs-5'>Saved</span>
</Box>

{/* Groups */}

<Box>
    <GroupOutlinedIcon className="fs-1 p-1" />
    <span className='mx-2 fs-5'>Groups</span>
</Box>

{/* Video */}

<Box>
    <GroupOutlinedIcon className="fs-1 p-1" />
    <span className='mx-2 fs-5'>Video</span>
</Box>

{/* marketplace */}

<Box>
    <GroupOutlinedIcon className="fs-1 p-1" />
    <span className='mx-2 fs-5'>Marketplace</span>
</Box>


{/* Feeds */}

<Box>
    <GroupOutlinedIcon className="fs-1 p-1" />
    <span className='mx-2 fs-5'>Feeds</span>
</Box>

{/* Events */}

<Box>
    <GroupOutlinedIcon className="fs-1 p-1" />
    <span className='mx-2 fs-5'>Events</span>
</Box>



{/* ads manager */}

<Box>
    <GroupOutlinedIcon className="fs-1 p-1" />
    <span className='mx-2 fs-5'>Ads Manager</span>
</Box>


{/* see more */}

<Box>
    <GroupOutlinedIcon className="fs-1 p-1" />
    <span className='mx-2 fs-5'>See more</span>
</Box>

</Box>


       </>
    );
};

export default LeftHomeComponent;

