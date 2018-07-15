import React from 'react';

import Header from './common/Header';
import MyRouter from './MyRouter';
import Footer from './common/Footer';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <MyRouter />
      <Footer />
    </div>
  );
};

export default App;