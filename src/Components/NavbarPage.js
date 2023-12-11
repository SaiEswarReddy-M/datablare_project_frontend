import { AppBar, Button, Stack, Toolbar, Typography, useMediaQuery, useTheme, Link as MuiLink } 
from '@mui/material'

import React from 'react'
import { Link as RouterLink} from 'react-router-dom'
import DrawerLeft from './DrawerLeft';
import useAuth from './useAuth';

const NavbarPage = () => {
 const theme = useTheme();
 const { auth } = useAuth();
 const isMatch= useMediaQuery(theme.breakpoints.down('md'));
  return (
      <AppBar position='static' sx={{backgroundColor:'#F3D6C2'}}>
         <Toolbar>
          { isMatch ? ( 
          <>
             
             <Typography variant='h6' fontWeight='900' textAlign='center' sx={{ flexGrow: 1}}>
               Company Name
             </Typography>
             <DrawerLeft />
          </>)  :
          (<>
          <Typography variant='h6' fontWeight='700' sx={{ flexGrow: 1 }}>
            <MuiLink color='inherit' underline='none' component={RouterLink} to='/home'>Company Name
            </MuiLink>
          </Typography>
          <Stack spacing={2} direction='row' >
            {
               auth.isLoggedIn ? (<Button 
                  color='inherit' 
                  component={RouterLink} 
                  to='/login' >
                   Logout
                  </Button>) :
            
           (
           <><Button color='inherit' component={RouterLink} to='/register' >
            Register
           </Button>
           <Button color='inherit' component={RouterLink} to='/login' >
            Login
           </Button>
           </>)
}
            {/* <Button color='inherit' component={RouterLink} to='/register' >
            Register
           </Button>
           <Button color='inherit' component={RouterLink} to='/login' >
            Login
           </Button> */}
          </Stack> 
          </>
         )}
         </Toolbar>
      </AppBar>
  )
}

export default NavbarPage
