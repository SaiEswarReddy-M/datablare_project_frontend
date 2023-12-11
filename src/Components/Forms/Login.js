import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { Link as RouterLink, useNavigate, useLocation} from 'react-router-dom' 
import './Login.css'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import useAuth from '../useAuth';


export default function Login() {
  const { login } = useAuth();
  // const {setAuth } = useAuth(); //setAuth  if login success
  const userRef = useRef()
  //Cursor comes to the username when came to this page 
    useEffect(
      ()=>{userRef.current.focus();},[]
    )

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
  
  // Formik Library content from here
  // Formik initial values
      const initialValues ={
      username:'',
      password:'',
      remember:true
    }

 //Yup validation for login form
  const validationSchema = Yup.object().shape({
    username:Yup.string().required("Required"),
    password:Yup.string().required("Required")
  })

// SubmitHandler of Login Page Details
  const onSubmit= async (values,props)=>{

      // console.log(values)
      const {username, password} = values
      console.log(values.username)

      // API calls 
      try {
        // const response = await axios.post('https://http://localhost:5000/login', values);
        // for checking login
        {/*
        await axios
         .post("http://reqres.in/api/login", {username,password})
         .then(res=>{
          alret('success')
          localStorage.setItem('token', res.data.token)
         })
         .catch((error) => {
           alert('service error')
      //   });
  
       */}

        // const response = await axios.post(
        //   'https://http://localhost:5000/login',
        //   JSON.stringify({username, password}),
        //    {
        //     headers: {'Content-Type': 'application/json'},
        //     withCredentials: true
        //    } 
        //   );
     navigate('/home')
        // Check if the request was successful 
        // if (response.status === 200) {
        //   console.log(response.data)
        //   console.log(JSON.stringify(response))
        //   const accessToken = response.data.accessToken; 
        //   const refreshToken = response.data.refreshToken; 
        //   console.log(accessToken)
        //   localStorage.setItem('jwtaccessToken', accessToken); //Store the token
        //   localStorage.setItem('jwtaccessToken', refreshToken); //Store the token
        //   console.log('Login successful!', accessToken);
        //   // Update the authentication state 
        //   login({ username: username, isLoggedIn: true });
        //   // setAuth({username,password, accessToken})
        //   navigate('/home'); // redirect to home page after successfull login

        //   // navigate(from,{ replace:true}); 
        //   // if there are more links the above line will make user to got that link before sign in page appear where the user clicked link

        //   } else {
          // Handle errors here, log them
          // console.error('Login failed:', response.data);
      //  }
      } catch (error) {
        console.error('An error occurred:', error);
      }

      // Reset the form
      setTimeout(()=>{
        props.resetForm()
        props.setSubmitting(false)
      },1000)
  }

  return (
    <div className='loginPage' style={{ height: '500px', overflowY: 'auto' }} >
      {/* style={{ height: '500px', overflowY: 'auto' }} */}
      <Grid>
        <Paper elevation={15} 
        sx={{padding:'20px', height:'75vh', width:'300px', margin:'75px auto'}}>
        {/* <Avatar src="/broken-image.jpg" /> */}
        <Grid align='center'>
            <Avatar 
            sx={{backgroundColor: 'red'}}><LockOutlinedIcon /></Avatar>
            <h2>Login</h2>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {
            (props)=>(
              <Form autoComplete="off">
                <Field as={TextField}
                    required
                    label="UserName"
                    name='username'
                    placeholder='Enter Your User Name'
                    variant="standard"
                    fullWidth
                    inputRef={userRef} //to set the ref
                    helperText={<ErrorMessage name='username'/>}
                  />
                  <Field as={TextField}
                    required
                    label="Password"
                    name='password'
                    type="password"
                    autoComplete="current-password"
                    placeholder='Enter Your Password'
                    variant="standard"
                    fullWidth
                    helperText={<ErrorMessage name='password'/>}
                    sx={{margin:'8px 0'}}
                  />
                  <Field as={FormControlLabel} 
                  name='remember' 
                  control={<Checkbox defaultChecked />} 
                  label="Remember me" />

                  <Button 
                  sx={{margin:'10px 0'}}
                  type='submit' 
                  color='primary'
                  variant='contained' 
                  fullWidth
                  disabled={props.isSubmitting}
                  >Login</Button>

              </Form>
            )
          }
        </Formik>
        <Typography sx={{padding:'5px'}}>
          <Link underline='hover' href='#'>Forget Password</Link>
        </Typography>
        <Typography sx={{padding:'5px'}}> Don't have an account?
          <Link component={RouterLink} to='/register' underline='hover' sx={{marginLeft:'10px'}}>Sign Up</Link>
        </Typography>
        </Paper>
      </Grid>
    </div>
  )
}
