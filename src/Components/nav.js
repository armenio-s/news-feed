import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { categoriesId } from '../Utils/constants'

// categoriesNames es: ['home', 'politica', 'internacionales']
const categoriesNames = Object.keys(categoriesId)

const StyledTabs = styled(Tabs)`
    .MuiTabs-flexContainer {
        margin-top: 70px;
    }
` 

class Nav extends Component {
  state = {
    value: 0,
  }

  handleNavigate = index => {
    this.setState({ value: index })

    const { history } = this.props

    const category = categoriesNames[index]
    history.push(category === 'home' ? '/' : `/categorias/${category}`)
  }

  render() {
    const { value } = this.state

    return (
      <StyledTabs
        value={value}
        textColor="primary"
        variant="fullWidth"
        indicatorColor="primary"
        onChange={(_event, index) => this.handleNavigate(index)}
      >
        {categoriesNames.map(category => (
          <Tab label={category} key={category} />
        ))}
      </StyledTabs>
    )
  }
}

export default withRouter(Nav)
