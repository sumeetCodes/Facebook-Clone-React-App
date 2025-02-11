import { Box, Button, Card, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginPageComponent = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const handleLogin = async (data) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/users');
      const users = response.data;

      const user = users.find((user) => user.email === data.email && user.password === data.password);

      if (user) {
        // handle successful login
        console.log(user);
        navigate('/home');
      } else {
        // handle failed login
        console.log("wrong");
      }
    } catch (error) {
      // handle errors
      alert("Sorry, something went wrong")
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    await handleLogin(data);
  };

  return (
    <>
      <div className='d-flex justify-content-between align-items-center container'
        style={{ height: "100vh" }}>

        <Grid container spacing={3} className=" ">

          {/* left side */}
          <Grid size={{ xs: 6, md: 6 }}>
            <Box className="mt-5">

              <Typography variant='h2' className='fw-bold mt-5' sx={{ color: "#1877f2", }}>
                facebook
              </Typography>

              <Typography variant='body1' className='fs-5 w-75'>
                Facebook helps you connect and share with the people in your life.
              </Typography>

            </Box>
          </Grid>

          {/* right side */}
          <Grid size={{ xs: 6, md: 6 }}>

            <Box>
              <Card className='rounded'>

                <form onSubmit={handleSubmit(onSubmit)}>

                  <Box className="p-3">

                    {/* email */}
                    <Box className="my-3">
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <TextField {...field}
                          id="outlined-basic" label="Email"
                          variant="outlined" fullWidth />
                        }
                      />

                    </Box>

                    {/* password */}
                    <Box className="my-3">
                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <TextField {...field}
                          id="outlined-basic" label="Password"
                          variant="outlined" fullWidth type="password" />
                        }
                      />

                    </Box>

                    <Box className="text-center">
                      <Button variant="contained" type='submit' fullWidth className='p-2 my-2'>Log in</Button>
                      <span className='text-primary'>Forgotten password?</span>
                      <hr />
                      <Button variant="contained" className='p-3'
                        sx={{ backgroundColor: "#36a420" }}
                      >Create new Account</Button>
                    </Box>


                  </Box>


                </form>

              </Card>

              <Box className="mt-4 text-center">
                <p>
                  <span className='fw-bold me-1'>Create a Page</span>
                  for a celebrity, brand or business.
                </p>
              </Box>

            </Box>

          </Grid>

        </Grid>

      </div>

    </>
  );
};

export default LoginPageComponent;

