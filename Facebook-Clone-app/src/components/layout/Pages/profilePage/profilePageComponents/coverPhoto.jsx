


import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Button, Card, TextField, Typography, Modal } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleIcon from '@mui/icons-material/People';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const CoverPhotoComponent = () => {
  // State to manage modal open/close
  const [open, setOpen] = useState(false);
  // State to manage form inputs
  const [username, setUsername] = useState('User');
const [profilePhoto, setProfilePhoto] = useState(localStorage.getItem('profilePhoto') || '');
const [coverPhoto, setCoverPhoto] = useState(localStorage.getItem('coverPhoto') || '');


useEffect(() => {
  setProfilePhoto(localStorage.getItem('profilePhoto') || '');
  setCoverPhoto(localStorage.getItem('coverPhoto') || '');
setUsername(localStorage.getItem('username') || "User");
}, []);

  // Function to handle modal open
  const handleOpen = () => setOpen(true);
  // Function to handle modal close
  const handleClose = () => setOpen(false);

  // Function to handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem('profilePhoto', profilePhoto);
  localStorage.setItem('coverPhoto', coverPhoto);
localStorage.setItem('username', username);
  console.log({ profilePhoto, username, coverPhoto });
  handleClose(); // close the modal after submission
};


const defaultProfilePic = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc0%2F27%2Fbe%2Fc027bec07c2dc08b9df60921dfd539bd.jpg&f=1&nofb=1&ipt=b0ea85ee9aa0334b9baa4f49d0f715701b78ab9c9d048eeaff515e3918a022d4&ipo=images'; 
// Replace with your default image URL

  return (
    <>
      <Box>
        {/* cover photo */}
        <Box className="postion-relative">

{/* Cover Photo */}
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
    fontSize: '28px',
    // Set the background image to the cover photo URL if provided
    backgroundImage: coverPhoto ? `url(${coverPhoto})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    {/* Show text if no cover photo is set */}
    {!coverPhoto && 'No Cover Photo'}
  </Box>
</Box>

          {/* profile picture  */}
          <Box>

 <img
    src={profilePhoto || defaultProfilePic} // Replace with a default image URL if needed
    alt=""
    className="rounded-circle bg-light position-absolute z-1 border border-3"
    style={{ top: "340px", left: "40px", width: 150, height: 150, objectFit: 'cover' }} // Adjust size and fit
  />
  {/* Add Cover Photo Button */}
  <Button variant="contained" className="position-absolute bg-light text-black fw-bold rounded-3 border border-0"
    style={{ top: "340px", left: "700px" }}
  >
    <CameraAltIcon className="mx-2 p-1" />  Add Cover photo
  </Button>



          </Box>

          <Box className="d-flex justify-content-between align-items-center">
            {/* profile name */}
            <Box>
              <Typography variant="h3" className="fw-bold me-5" style={{ marginLeft: "220px" }}>
                {username}
              </Typography>
            </Box>

            {/* buttons */}
            <Box>
              {/* add story btn */}
              <Button variant="contained" className="rounded-3 mx-2">
                Add to Story
              </Button>

              {/* edit profile button */}
              <Button variant="contained" className="bg-light text-black rounded-3 mx-2" 
onClick={handleOpen}>
                Edit Profile
              </Button>

              <Button variant="contained" className="bg-light text-black rounded-2 me-4">
                <KeyboardArrowUpIcon />
              </Button>
            </Box>
          </Box>
        </Box> {/* Closing the cover photo Box */}

        {/* Modal for editing profile */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: 400, 
            bgcolor: 'background.paper', 
            boxShadow: 24, 
            p: 4 
          }}>
            <Typography variant="h6" component="h2">
              Edit Profile

            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Profile Photo URL"
                fullWidth
                margin="normal"
                value={profilePhoto}
                onChange={(e) => setProfilePhoto(e.target.value)}
              />
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Cover Photo URL"
                fullWidth
                margin="normal"
                value={coverPhoto}
                onChange={(e) => setCoverPhoto(e.target.value)}
              />
              <Button type="submit" variant="contained" className="mt-2" color="primary" fullWidth>
                Save Changes
              </Button>
<Button type="submit" variant="contained" className="my-2 bg-danger text-white" fullWidth>
                Close
              </Button>

            </form>
          </Box>
        </Modal>

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
                <PeopleIcon className="text-primary" style={{ fontSize: 100 }} />
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
            <ul className="list-unstyled d-flex justify-content-between align-items-center">
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

export default CoverPhotoComponent;


