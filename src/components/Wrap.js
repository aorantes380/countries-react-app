import React from 'react';
import Styled from 'styled-components';
import Header from './Header';

const WrapStyled = Styled.div `
    width: 90%;
    margin: 0 auto;
`

function Wrap({children}) {

    return (
        <React.Fragment>
            <Header />
            <WrapStyled>
                {children}
            </WrapStyled>
        </React.Fragment>
    )
}
export default Wrap;