import React, { useState, useEffect } from 'react';

import logo from "../../assets/logo.png";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";

import { Grid, TextField } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function HomeHeader() {
  const location = useLocation();

  return (
    <Grid container className='header'>
      <Grid item xs={2} className='logoContainer'>
        <Link to="/"><img alt='logo' src={logo} /></Link>
      </Grid>

      <Grid item xs={4} >
        <TextField variant="standard"
          InputProps={{
            disableUnderline: true,
            style: { padding: '10px' },
          }}
          className='searchBar' fullWidth label="Search for online course" id="fullWidth" />
      </Grid>

      <Grid item xs={4}>
        <div className="menu">
          <ul>
            <li className={location.pathname === '/creations'? 'activeSidebarMenu' : ''}><Link  to='/creations'>Creations</Link></li>
            <li className={location.pathname === '/invitation'? 'activeSidebarMenu' : ''} ><Link to='/invitation'>Invitation</Link></li>
            <li className={location.pathname === '/litigation'? 'activeSidebarMenu' : ''} ><Link to='/litigation'>Litigation</Link></li>
            <li className={location.pathname === '/wallet'? 'activeSidebarMenu' : ''} ><Link to='/wallet'>Wallet</Link></li>
            <li className={location.pathname === '/credit'? 'activeSidebarMenu' : ''} ><Link to='/credit'>Credit</Link></li>
          </ul>
        </div>
      </Grid>


      <Grid item xs={2} className='headerMenu'>
        <ul style={{ display: 'flex', justifyContent: 'flex-end', gap: '25px', alignItems: 'center', marginTop: '45px' }}>
          <li className='menuBox'><img alt='icon-menu-1' src={icon1} /></li>
          <li className='menuBox'><img alt='icon-menu-1' src={icon2} /></li>
          <li style={{ display: 'flex', width: '120px', alignItems: 'center', gap: '5px' }}><img alt='user-img' style={{width: '40px', border: '1px solid #fff', borderRadius: '7px' }} src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/156905/profile/profile-512.jpg?1530296477'} /> John Doe</li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default HomeHeader;