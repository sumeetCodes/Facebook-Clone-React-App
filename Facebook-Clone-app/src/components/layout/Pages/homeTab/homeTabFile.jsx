
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
<Grid size={{ md: 3 }}>

<LeftHomeComponent />

</Grid>

{/* middle */}
<Grid size={{ md: 6 }} className="">

    <MiddleHomeComponent />

</Grid>

{/* right */}
<Grid size={{ md: 3 }}>

    <RightHomeComponent />

</Grid>


</Grid>

 



       </>
    );
};

export default HomeTabComponent;








