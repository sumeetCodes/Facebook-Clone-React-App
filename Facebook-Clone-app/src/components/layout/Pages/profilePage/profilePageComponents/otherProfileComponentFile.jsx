import Grid from '@mui/material/Grid2';
import { Box, Button, Card, Modal, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import FlagIcon from '@mui/icons-material/Flag';
import SettingsIcon from '@mui/icons-material/Settings';
import TuneIcon from '@mui/icons-material/Tune';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import WindowIcon from '@mui/icons-material/Window';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import MoodIcon from '@mui/icons-material/Mood';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GifIcon from '@mui/icons-material/Gif';


const OtherProfileComponents = () => {



  return(

<>

<Grid container spacing={2}>

{/* intro */}
<Grid size={{ xs: 12, md: 5 }} className="">

<Card className="p-2 rounded-3">

<Box className="p-2">

<Typography variant="h5" className="fw-bold">
Intro
</Typography>

{/* buttons */}

<Box className="my-3">

<Button variant="contained" className="bg-body-secondary my-2 text-black fw-bold" fullWidth>Add bio</Button>

<Button variant="contained" className="bg-body-secondary my-2 text-black fw-bold" fullWidth>Edit Profile</Button>

<Button variant="contained" className="bg-body-secondary my-2 text-black fw-bold" fullWidth>Add Featured</Button>


</Box>

</Box>

</Card>

</Grid>

{/* make post  */}

<Grid  size={{ xs: 12, md: 7 }}  className="">

<Box className="mb-5 rounded-3">

{/* post */}
<Card className='p-2 rounded-3'>


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
<FlagIcon className="text-primary mx-2"/>
<span className=''>Life event</span>

</Box>

</Card>

{/*  */}

<Card className="p-2 mt-4 rounded-3">

<Box className="d-flex justify-content-between align-items-center">

<Box>
<Typography variant="h5" className="fw-bold"> Posts
</Typography>
</Box>

<Box>
<Button variant="contained" className=" mx-1 bg-body-secondary text-black
fw-bold"> <TuneIcon className="me-2" /> Filters</Button>
<Button variant="contained" className="bg-body-secondary mx-1 text-black
fw-bold"> <SettingsIcon className="me-2" /> Manage Posts</Button>

</Box>

</Box>

<hr />

<Box>

<Grid container spacing={1} className="">

{/* list view */}
<Grid size={{md:6}} className="text-center link-underline-primary">
<Typography variant="body1" className="text-primary fw-bold">
<DensityMediumIcon className="me-1" /> List view
</Typography>
</Grid>


{/* grid view */}
<Grid size={{md:6}} className="text-center">
<Typography variant="body1" className="fw-bold">
<WindowIcon className="me-1" />
Grid view
</Typography>
</Grid>


</Grid>

</Box>

</Card>

</Box>


</Grid>



</Grid>


{/* photos, friends, birth */}

<Grid container spacing={2}>

{/* left side photos friend */}

<Grid size={{md:5}}>

{/* photos */}
<Card className="p-3 my-4 rounded-3">

<Box className="d-flex justify-content-between align-items-center">


<Box className="me-2">
<Typography variant="h5" className="fw-bold">
Photos 
</Typography> 
</Box>

<Box className="ms-2">
<Typography variant="body1" className="text-primary">
See all Photos
</Typography> 
</Box>



<Box>

</Box>

</Box>

</Card>


{/* friends */}
<Card className="p-3 my-4 rounded-3">

<Box className="d-flex justify-content-between align-items-center">


<Box className="me-2">
<Typography variant="h5" className="fw-bold">
Friends 
</Typography> 
</Box>

<Box className="ms-2">
<Typography variant="body1" className="text-primary">
See all Friends
</Typography> 
</Box>



<Box>

</Box>

</Box>

</Card>





</Grid>


{/* birth */}

<Grid size={{md:7}}>

<Card className="p-2 my-4 rounded-3">

<Box>

{/* name profile */}
<Box className="d-flex justify-content-between align-items-center">

<Box className="d-flex">

<Box className="p-1 bg-white">
<PersonIcon style={{fontSize:50}} className="bg-light text-secondary-emphasis rounded-circle border border-3" />
</Box>

<Box>
<Typography variant="h6" className="fw-bold">
User
</Typography>

<Typography variant="body2" className="text-secondary">
Born on Febuary 31, 1999
</Typography>

</Box>

</Box>

<Box>
<MoreHorizIcon className="rounded-circle me-2 text-secondary" />
</Box>

</Box>


{/* birth date */}

<Box className="text-center my-3">

<Box className="my-1">
<ChildFriendlyIcon className="text-primary" style={{fontSize:70}} />
</Box>

<Box className="my-1">
<Typography variant="h5" className="fw-bold">
Born on Febuary 31, 1999
</Typography>
</Box>

</Box>

<hr />

{/* like, comment, share */}

<Grid container spacing={3}>


{/* like */}
<Grid size={{md:4}} className="">
<Box className="d-flex text-center">
<ThumbUpOffAltIcon className="text-secondary mx-2" />
<Typography variant="body2" className="text-secondary">
Like
</Typography>
</Box>
</Grid>

{/* comment */}
<Grid size={{md:4}} className="text-center">
<Box className="d-flex text-center">
<CommentIcon className="text-secondary mx-2" />
<Typography variant="body2" className="text-secondary">
Comment
</Typography>
</Box>
</Grid>

{/* share */}
<Grid size={{md:4}} className="text-center">
<Box className="d-flex text-center">
<ShareIcon className="text-secondary mx-2" />
<Typography variant="body2" className="text-secondary">
Share
</Typography>
</Box>
</Grid>


</Grid>

<hr />

{/* write */}

<Box>

<Box className="">
    <AccountCircleIcon className="fs-1 border rounded-circle p-1 me-1 text-secondary" />
<input type="text" placeholder='Write a comment' 
className='p-2 rounded-pill border border-none w-75 me-1 text-secondary' />
<MoodIcon className="me-1 text-secondary" />
<CameraAltIcon className="me-1 text-secondary" />
<GifIcon className="text-secondary" />
</Box>



</Box>


</Box>

</Card>

</Grid>




</Grid>






</>

  );


};


export default OtherProfileComponents;

