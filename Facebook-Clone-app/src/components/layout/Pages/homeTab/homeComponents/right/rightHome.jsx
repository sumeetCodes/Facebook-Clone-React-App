import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Box, Typography } from '@mui/material';
import React from 'react';


const RightHomeComponent = () => {
    


    return (
       <>


<Box>


<Box className="my-3 mx-3">
<Typography variant="h6" className="fw-bold text-secondary fs-5">
Group chats
</Typography>
</Box>

<Box className="my-1 mx-3">

<AddCircleRoundedIcon className='mx-1 text-secondary fs-2' />
<span>Create group chats</span>
</Box>


</Box>
       </>
    );
};

export default RightHomeComponent;

