import { Grid, Typography } from '@mui/material'
import React  from 'react'
import { Link } from 'react-router-dom'
import Login from './Forms/Login'
import Register from './Forms/Register'


export default function Home() {

  return (
    <>
    Home page
    {/* {
      auth ?
      (<Grid>
        <Typography variant='h2' sx={{textAlign:'center', marginTop:'100px'}}>
          Hey there....,  Welcome to Home Page. You are Logged in
        </Typography>
      </Grid>):
       (
        <Grid>
          <Typography variant='h3' sx={{textAlign:'center', marginTop:'100px'}}>
            Login to Access the Information 
            <Link to='/login'>Login</Link>
          </Typography>
          
        </Grid>
       )
    }
     */}
    </>
  )
}
