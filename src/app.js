import React          from 'react'
import { HashRouter } from 'react-router-dom'
import { render }     from 'react-dom'

import 'Style/app.css';

import BrandBar    from  './components/shared/BrandBar';
import AppBar      from  './components/shared/AppBar';
import Breadcrumbs from  './components/shared/Breadcrumbs';
import Footer      from  './components/shared/Footer';

const App = () => (
  <div>
    <BrandBar />
    <AppBar />
    <Breadcrumbs />
    <Footer />
  </div>
)

render(
  <HashRouter basename="/">
    <App />
  </HashRouter>

  , document.getElementById('react-template'));
