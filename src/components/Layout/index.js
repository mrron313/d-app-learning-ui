import React, { Component } from 'react';
import Footer from './Footer';
import SideBar from './Sidebar';
import Header from './Header';

import './Layout.css';
import { Grid } from '@mui/material';
import TrandingNews from '../TrandingNews/index';

function MainLayout({ children }) {
  return (
    <Grid className='layout'>
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <SideBar /> 
        </Grid>
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={12}>
              {children}
            </Grid>
            <Grid item xs={12}>
              <TrandingNews />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainLayout;