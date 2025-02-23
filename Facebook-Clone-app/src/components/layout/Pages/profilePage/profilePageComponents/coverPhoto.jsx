
import Grid from '@mui/material/Grid2';
import { Box, Button, Card, TextField, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleIcon from '@mui/icons-material/People';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const CoverPhotoComponent = () => {


return(

<>


<Box>

  {/* cover photo */}
  <Box className="postion-relative">
    <Box className="cover-photo-container">
      <Box className="cover-photo" style={{
        backgroundColor: '#fff',
        height: '350px',
        width: '100vw',
        border: '3px solid #ddd',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#666',
        fontSize: '28px'
      }}>
        No Cover Photo
      </Box>
    </Box>

    {/* profile picture  */}
    <Box>
      <PersonIcon
        className="rounded-circle bg-light position-absolute z-1 border border-3"
        style={{ top: "340px", left: "40px", fontSize: 150 }}
      />

      {/* add cover photo button */}
      <Button variant="contained" className="position-absolute bg-light 
        text-black fw-bold rounded-3 border border-0"
        style={{ top: "340px", left: "700px" }}
      >
        <CameraAltIcon className="mx-2 p-1" />  Add Cover photo
      </Button>
    </Box>

    <Box className="d-flex justify-content-between align-items-center">

      {/* profile name */}
      <Box>
        <Typography variant="h3" className="fw-bold me-5" style={{ marginLeft: "220px" }}>
          User
        </Typography>
      </Box>

      {/* buttons */}
      <Box>
        {/* add story btn */}
        <Button variant="contained" className="rounded-3 mx-2">
          Add to Story
        </Button>

        {/* edit profile button */}
        <Button variant="contained" className="bg-light text-black rounded-3 mx-2">
          Edit Profile
        </Button>

        <Button variant="contained" className="bg-light text-black rounded-2 me-4">
          <KeyboardArrowUpIcon />
        </Button>
      </Box>
    </Box>
  </Box> {/* Closing the cover photo Box */}

  {/* friend recommendation */}
  <Box>
    <Box className="container border border-3 p-2 rounded-3 mt-5 text-center">
      <Box className="cover-photo" style={{
        backgroundColor: '#fff',
        height: '150px',
        width: '100%',
        alignItems: 'center',
        color: '#666',
      }}>

<Box>
<PeopleIcon className="text-primary" style={{fontSize:100}} />
</Box>
        <Box className="">
          <Typography variant="h6" className="fw-bold">
            Add more friends to get recommendations
          </Typography>
        </Box>

        <Box className="mb-4">
          <Typography variant="body2" className="fs-6">
            When you add some more friends you’ll see a list of people you may know here.
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box> {/* Closing the friend recommendation Box */}

<hr className="container fw-bold mb-4" />

<Box className="container d-flex justify-content-between align-items-center">

<Box className="">
<ul className="list-unstyled d-flex justify-content-between
align-items-center">

<li className="text-primary mx-1"> <u className="text-primary">Posts</u></li>
<li className="mx-2">Abouts</li>
<li className="mx-2">Friends</li>
<li className="mx-2">Photos</li>
<li className="mx-2">Videos</li>
<li className="mx-2">Check-ins</li>
<li>More</li>

</ul>
</Box>

<Box>

<Button variant="contained" className="bg-light">

<MoreHorizIcon className="text-black" />

</Button>
</Box>


</Box>


</Box> {/* Closing the main Box */}




</>


);

};


export default CoverPhotoComponent
