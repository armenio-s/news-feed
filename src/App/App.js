import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import styled, { createGlobalStyle } from 'styled-components'

import Header from '../Components/header'
import Nav from '../Components/nav'

import Home from '../Pages/home'
import Category from '../Pages/category'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #fafafa;
  }
`


class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Container fixed>
          <Header />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categorias/:category" exact component={Category} />
          </Switch>

        </Container>
      </Router>
    )
  }
}

export default App

