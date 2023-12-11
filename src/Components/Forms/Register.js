import React, { useEffect, useRef, useState } from 'react';
import { Button, TextField, Typography, Paper, Grid, Avatar, Box, Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';




import Home from '../Home'
import Login from './Login';

// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]/;

const initialValues={
  fullName:'',
  email:'',
  password:'',
  confirmPassword:'',
  termsAndConditions:true
}
// Yup validation
const validationSchema=Yup.object().shape({
  fullName:Yup.string().required('Full Name is Required'),
  email:Yup.string().email('Enter valid email').required('Required'),
  password:Yup.string().min(8,"'Password must be at least 8 characters'").matches(PWD_REGEX,'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character').max(15,'Password should be less than 15 characters').required('Required'),
  confirmPassword:Yup.string().oneOf([Yup.ref('password')],'Passwords must match').required('Required'),
  termsAndConditions:Yup.string().oneOf(['true'],'Accept terms and Conditions')
})





function Register() {
  const userRef = useRef()
  // const [values, setValues] = useState(initialValues);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
 
  //Cursor comes to the username when came to this page 
  useEffect(
    ()=>{userRef.current.focus();},[]
  )

  // SubmitHandler of signup button
  const onSubmit= async (values,props)=>{
    // console.log(values)
    const {confirmPassword,
    termsAndConditions, ...data} = values;
    console.log(data);
    setSuccess(true)
    // localStorage.setItem('userData',data);
    // localStorage.setItem('fullName',values.fullName)
    // localStorage.setItem('email',values.email)
    // localStorage.setItem('password',values.password)
    // props.resetForm();

      // const response = await axios
      //   .post("http://localhost:5000/registration", data)
      //   .catch((error) => {
      //     if (error && error.response) setErrMsg(error.response.data.message);
      //     setSuccess(false);
      //   });
  
      // if (response && response.data) {
      //   setErrMsg(null);
      //   // setSuccess(response.data.message);
      //   props.resetForm();
      //   // history.push('/login');
      // }
    


    {/*
     try {
  const response = await axios.post("http://localhost:5000/registration", data);
                
            console.log(response.data)

            const access_token = await response.data.token;
            const refresh_token = await response.data.refreshToken;
            console.log(response.data)
            console.log(refresh_token)

            // Store the access token securely (e.g., in Local Storage)
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);

            if (response.data.success) {
            // Assuming backend returns a success flag
            setErrMsg(null);
            setSuccess(response.data.message);
            props.resetForm();
          } else {
            setErrMsg(response.data.message); 
            // Assuming backend returns an error message
            setSuccess(false);
          }

        } catch (error) {
          console.error(error);
          setErrMsg("An error occurred during registration.");
          setSuccess(false); 
        }
   */}

    
  }

  return (
    <>
    {success ? (
    <>
      <Grid>
        {/* <Typography>errMsg</Typography> */}
        <Login/>
      </Grid>
    </>):( 

      <Grid sx={{ height: '500px', overflowY: 'auto' }}>
        <Paper 
        elevation={15}
        sx={{padding:'20px 20px', width:'375px', margin:'50px auto'}}
        >
          <Box align='center'>
            <Avatar sx={{ bgcolor: 'green' }}src="/broken-image.jpg"></Avatar>
            <h2 >Sign Up</h2>
            <Typography variant='subtitle2'>Create Your Account</Typography>
          </Box>

          <Formik 
          initialValues={initialValues} 
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
            {
              (props)=>(
                <Form autoComplete="off">
                  <Field as={TextField}
                      required
                      fullWidth
                      variant="outlined"
                      margin="5px"
                      label="Full Name"
                      placeholder='Enter Your Full Name'
                      name='fullName'
                      inputRef={userRef} //to set the ref
                      helperText={<ErrorMessage name='fullName'/>}
                    />
                    <Field as={TextField}
                      required
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      label="Email"
                      type="email"
                      name='email'
                      placeholder='Enter Your Email'
                      helperText={<ErrorMessage name='email'/>}
                    />
                    <Field as={TextField}
                      required
                      fullWidth
                      variant='outlined'
                      label='Password'
                      margin='normal'
                      placeholder='Enter Password'
                      type='Password'
                      name='password'
                      helperText={<ErrorMessage name='password'/>}
                    />
                  <Field as={TextField}
                      required
                      fullWidth
                      variant='outlined'
                      label='Confirm Password'
                      placeholder='Re-Enter Password'
                      margin='normal'
                      type='Password'
                      name='confirmPassword'
                      helperText={<ErrorMessage name='confirmPassword'/>}
                    />
                    <Grid>
                      <FormControlLabel 
                      name='termsAndConditions'
                      required 
                      control={<Field as={Checkbox} defaultChecked/>} 
                      label="I accept Terms and Conditions" />
                      <FormHelperText>
                        <ErrorMessage name='termsAndConditions'></ErrorMessage>
                      </FormHelperText>
                    </Grid>
                    <Button 
                    type='submit' 
                    variant='contained' 
                    color='primary' 
                    fullWidth 
                    disabled={props.isSubmitting ||!props.isValid}>
                      Sign Up
                    </Button>
  
                </Form>
              )
            }
          </Formik>
        </Paper>
      </Grid>
      // </div>
    )}
    
    
    </>
  );
}

export default Register;
