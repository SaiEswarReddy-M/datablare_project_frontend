import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const DrawerLeft = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const PAGES = ['Register','Login'];
  return (
    <>
      <Drawer 
      anchor='left'
      open={openDrawer}
      onClose={()=>setOpenDrawer(false)}
      >
        <List>
         {
          PAGES.map((page, index)=>(
           <ListItemButton 
           onClick={()=>setOpenDrawer(false)} 
           component={Link} to={`${page}`} 
           key={index} 
           >
           <ListItem>
            <ListItemText>{page}</ListItemText>
           </ListItem>
         </ListItemButton>
          ))
         }
        </List>
      </Drawer>

      <IconButton 
      sx={{marginLeft:'auto',color:'whitesmoke'}} 
      onClick={()=>setOpenDrawer(!openDrawer)}>
       <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerLeft
