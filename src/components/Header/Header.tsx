import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputIcon from '@mui/icons-material/Input';
// new imports
import Avatar from '@mui/material/Avatar';

const Header = function () {
  const [firstName, setFirstName] = useState<string>('dsa');
  const [secondName, setSecondName] = useState<string>('Hapon');

  function stringAvatar(firstName: string, secondName: string) {
    if(firstName && secondName){
      const initials = `${firstName.slice(0,1)}${secondName.slice(0,1)}`
      console.log(initials)
    return initials.toLocaleUpperCase();
    }
    return null
  }

  // const test = firstName.slice(0,1)
  // stringAvatar(firstName, secondName)
  // console.log(typeof(test))
  // console.log(test)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#ababab' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{ color: '#f00' }}>
            Consalting
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ color: '#000000' }}>
            Header Title
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Box sx={{ mr: 1 }}>
              <Typography variant="subtitle2" sx={{ textAlign: 'right' }} style={{ color: '#000000' }}>
                {firstName}
              </Typography>
              <Typography variant="subtitle2" sx={{ textAlign: 'right' }} style={{ color: '#000000' }}>
                {secondName}
              </Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#808080', mr: 2 }}>{stringAvatar(firstName, secondName)}</Avatar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <InputIcon style={{ color: '#000000' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
