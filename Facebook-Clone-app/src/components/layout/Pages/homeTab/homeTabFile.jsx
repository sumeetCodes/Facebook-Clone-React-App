
import React from 'react';
import HeaderFileComponent from '../../Header/headerFile';
import Grid from '@mui/material/Grid2';
import LeftHomeComponent from "./homeComponents/left/leftHome.jsx"
import MiddleHomeComponent from './homeComponents/middle/middleHome';
import RightHomeComponent from './homeComponents/right/rightHome';

const HomeTabComponent = () => {
    


    return (
       <>

<HeaderFileComponent />

<Grid container spacing={2}>

{/* left */}
<Grid size={{ md: 3, lg:3 }} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>

<LeftHomeComponent />

</Grid>

{/* middle */}
<Grid size={{ md: 6, lg:6, xs:12 }} className="">

    <MiddleHomeComponent />

</Grid>

{/* right */}
<Grid size={{ md: 3, lg:3 }} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>

    <RightHomeComponent />

</Grid>


</Grid>

 



       </>
    );
};

export default HomeTabComponent;








