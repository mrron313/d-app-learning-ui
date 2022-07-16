import React, { Component } from 'react';
import Footer from './Footer';
import SideBar from './Sidebar';
import Header from './Header';

import './Layout.css';

function MainLayout({ children }) {
  return (
    <section className='layout'>
      <Header />
      <section>
          <SideBar /> 
          <main>
            {children}
          </main>
          <Footer />
      </section>
    </section>
  );
}

export default MainLayout;