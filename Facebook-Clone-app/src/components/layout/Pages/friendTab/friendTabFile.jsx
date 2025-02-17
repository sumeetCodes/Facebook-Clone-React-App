
import React from 'react';
import HeaderFileComponent from '../../Header/headerFile';
import Grid from '@mui/material/Grid2';
import FriendLeftComponent from './friendLeft';
import FriendRightComponent from './friendRight';

const FriendTabComponent = () => {
    


    return (
       <>

     <HeaderFileComponent /> 
       
       <Grid container>

{/* left */}
 <Grid size={{md:4}}>

<FriendLeftComponent />

</Grid>

{/* right */}
<Grid size={{md:8}}>

  <FriendRightComponent />

</Grid>


       </Grid>

       
       </>
    );
};

export default FriendTabComponent;

