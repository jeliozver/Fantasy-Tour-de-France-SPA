import React from 'react';

import Header from './common/Header';
import MyRouter from './MyRouter';
import Footer from './common/Footer';

import AuthService from '../utilities/AuthService';
import CrudService from '../utilities/CrudService';

const Auth = new AuthService();
const Crud = new CrudService();

const App = () => {
  return (
    <div className="wrapper">
      <Header Auth={Auth}/>
      <MyRouter Auth={Auth} Crud={Crud}/>
      <Footer />
    </div>
  );
};

export default App;