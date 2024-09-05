import React from 'react';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// layout 
import Root from './layouts/Root';
// pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import CollectionPage from './pages/CollectionPage';
import ProductGrid from './components/collection/ProductGrid';
import CartPage from './pages/CartPage';
import LoginAndRegisterPage from './pages/LoginAndRegisterPage';
import WishListPage from "./pages/WishListPage";
import ProductList from './components/collection/ProductList';
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';
import AboutPage from './pages/AboutPage';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element = { <Root /> } >
      <Route index element = {<HomePage/>} />
      <Route path='collection' element={ <CollectionPage/> }>
        <Route index element={<ProductGrid/> } />
        <Route path='grid' element={<ProductGrid/>} />
        <Route path='list' element={ <ProductList/>}  />
      </Route>
      <Route path='about' element={ <AboutPage/> } />
      <Route path='contact' element = { <ContactPage/>} />
      <Route path='wishlist' element={ <WishListPage /> } />
      <Route path='cart' element={ <CartPage/> } />
      <Route path='login-register' element={ <LoginAndRegisterPage/> }>
        <Route index element = { <Login/> }/>
        <Route path='login' element= { <Login/> } />
        <Route path='register' element= { <Register/> } />
      </Route>
      <Route path='*' element={<NotFoundPage/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App