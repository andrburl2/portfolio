import React, { PureComponent } from 'react';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx'

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