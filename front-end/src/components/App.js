import React from 'react';

import Header from './common/Header';
import MyRouter from './MyRouter';
import Footer from './common/Footer';

import AuthService from '../utilities/AuthService';
import CrudService from '../utilities/CrudService';
import HelperService from '../utilities/HelperService';

const Auth = new AuthService();
const Crud = new CrudService();
const Helper = new HelperService();

const App = () => {
  return (
    <div className="wrapper">
      <Header Auth={Auth} Helper={Helper} />
      <MyRouter Auth={Auth} Crud={Crud} Helper={Helper}/>
      <Footer />
    </div>
  );
};

export default App;