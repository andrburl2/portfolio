import React, { PureComponent } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Main   />
        <Footer />
      </>
    );
  }
}

export default App;