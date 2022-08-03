import React, { useState, useEffect } from 'react';

import logo from "../../assets/logo.png";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";

import { Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Grid container className='header'>
      <Grid item xs={2} className='logoContainer responsive'>
        <Link to="/"><img alt='logo' src={logo} /></Link>
      </Grid>

      <Grid item xs={7} className='responsive'>
        <TextField variant="standard"
          InputProps={{
            disableUnderline: true,
            style: { padding: '6px 17px', color: '#32363C' },
          }}
          className='searchBar' fullWidth placeholder="Search for online course" id="fullWidth" />
      </Grid>

      <Grid item xs={3} className='headerMenu'>
        <ul style={{ display: 'flex', justifyContent: 'flex-end', gap: '25px', alignItems: 'center', marginTop: '45px' }}>
          <li className='menuBox'><img alt='icon-menu-1' src={icon1} /></li>
          <li className='menuBox'><img alt='icon-menu-1' src={icon2} /></li>
          <li style={{ display: 'flex', width: '120px', alignItems: 'center', gap: '5px' }}><img alt='user-img' style={{width: '40px', border: '1px solid #fff', borderRadius: '7px' }} src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/156905/profile/profile-512.jpg?1530296477'} /> John Doe</li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Header;