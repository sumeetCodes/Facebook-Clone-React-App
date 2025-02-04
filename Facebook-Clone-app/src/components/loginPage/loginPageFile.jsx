
import { Box, Button, Card, Grid2, TextField, Typography } from "@mui/material";
import "./loginPageFile.css"


const LoginPageFileComponent = () => (

    <>

        <Box className="login">

<Grid2 container spacing={6}>
            


            {/* Left side */}

                <Grid2 xs={12} sm={6} md={6} sx={{border:"1px solid red"}}>

            <Box className="facebook">
                <Typography variant="h6" component="div"
                    className="facebook_text">
                    facebook
                </Typography>

                <Typography className="title" variant="body1" component="p">
                    Facebook helps you connect and share with the people in your life.
                </Typography>

</Box>
                        </Grid2>


{/* right side */}
<Grid2 xs={12} sm={6} md={6} sx={{border:"1px solid red"}}>
    <Card variant="outlined">

                <Box className="login_'container">
                    <Box className="login_details ">

<TextField id="outlined-basic" className="mb-3" 
sx={{ display: 'block' }}
label="Email Address"  variant="outlined" />

<TextField id="outlined-basic" className="mb-3" 
sx={{ display: 'block' }}
label="Password"  variant="outlined" />

<Button fullWidth variant="contained" className="mb-3 Log_btn">Log In</Button>

<Typography variant="body1"  className="forget"
sx={{color:'#0866ff'}} component="p">
Forgetten Password?
</Typography>

<Box sx={{mb:3}}>
    <hr />
</Box>

<Button  sx={{pt:2, pb:2}}
 variant="contained" className="mb-3 new_account_btn">Create new Account</Button>



                    </Box>
                </Box>
</Card>

</Grid2>



</Grid2>

        </Box>



    </>


);

export default LoginPageFileComponent;
