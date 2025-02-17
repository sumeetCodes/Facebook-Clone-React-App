
import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Posts from '../../../../../API\'s/postsAPI/post';


const MiddleHomeComponent = () => {
    


    return (
       <>

{/* write */}

<Box className="mb-5 rounded-3">

<Card className='p-2'>


<Box className="">
    <AccountCircleIcon className="fs-1 border rounded-circle p-1 me-2" />
<input type="text" placeholder='What on your mind, User' className='p-2 rounded-pill border border-none w-75 mx-2' />
</Box>

<hr />

<Box className="">

{/* live  */}
<VideoCameraBackIcon className="text-danger mx-2" />
<span className='me-4'>Live video</span>

{/* photo */}
<PhotoSizeSelectActualIcon className="text-success mx-2"/>
<span className='me-3'>Photos/Videos</span>

{/* feeling */}
<EmojiEmotionsIcon className="text-warning mx-2"/>
<span className=''>Feeling/activity</span>

</Box>

</Card>


</Box>

{/* story */}

<Box className="mb-5">


<Card className='p-2'>

<Box className="d-flex align-items-center">

<Box>
<AddCircleRoundedIcon className='mx-1 text-primary fs-1' />
</Box>

<Box className="mx-2">
<Typography variant="body2" className="fw-bold fs-6">
Create Story
</Typography>
<span className='fs-6'>Share a photo or write something</span>
</Box>

</Box>


</Card>

</Box>


{/* posts */}

<Box className="mt-4">

<Posts />

</Box>






       </>
    );
};

export default MiddleHomeComponent;

