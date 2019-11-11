import React from 'react';
import Header from '../Components/header';
import Nav from '../Components/nav';
import Card from '../Components/cards';

class App extends React.Component {
  render(){
    return (
      <>
        <Header />
        <Nav />
        <Card />
      </>
    );
  }
}

export default App;
