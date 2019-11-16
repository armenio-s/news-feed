import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'

const StyledTypography = styled(Typography)`
    h1 {
        font-size: 1rem!important;
    }
` 

//Acá va el título o logo
class Header extends React.Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <StyledTypography variant="h1">News Room</StyledTypography>
                    <InputBase placeholder="Buscar noticias" />
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header; 