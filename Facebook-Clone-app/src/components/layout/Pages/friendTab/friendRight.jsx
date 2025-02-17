
import { Box, Typography } from '@mui/material';
import React from 'react';
import PeopleIcon from '@mui/icons-material/People';

const FriendRightComponent = () => {
    

    const customMargin = {
  marginTop: '180px'
};

const customFont = {
  fontSize: '120px',
};





    return (
       <>


  <Box className="text-center" style={customMargin}>
    

    <PeopleIcon className='text-primary' style={customFont} />

    <Typography varaint="body2" className="fs-6 fw-bold text-secondary">
        When you have friend requests or suggestions, you'll see them here.
    </Typography>


    </Box> 
       
       </>
    );
};

export default FriendRightComponent;
