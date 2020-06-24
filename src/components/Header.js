import React from 'react';
import Styled from 'styled-components';

const HeaderStyled = Styled.div `
    background: black;
    padding: 10px 0;
    h1{
        color: white;
        margin: 0;
        font-size: 25px;
        @media screen and (min-width: 767px) {
            font-size: 50px;
        }
    }
`

function Header(){
    return(
        <HeaderStyled>
            <h1>Países del mundo</h1>
        </HeaderStyled>
    )
}

export default Header;