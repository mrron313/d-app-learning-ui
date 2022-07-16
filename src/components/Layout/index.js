import React, { Component } from 'react';
import Footer from './Footer';
import SideBar from './Sidebar';
import Header from './Header';

import './Layout.css';
import { Grid } from '@mui/material';

function MainLayout({ children }) {
  return (
    <Grid className='layout'>
      <Header />
      <Grid container>
        <Grid item xs={3}>
          <SideBar /> 
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainLayout;