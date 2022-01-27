import React, { PureComponent } from 'react';
import Header from './header/header.jsx';
import Main from './main/main.jsx';
import Footer from './footer/footer.jsx'

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