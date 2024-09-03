import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Root() {
  return (
    <div className='min-h-fit'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root