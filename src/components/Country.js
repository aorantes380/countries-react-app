import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const CountryStyled = Styled.div `
    box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 7px 2px;
    border-radius: 4px;
    background-color: white;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid white;
    cursor: pointer;
    img{
        width: 100%;
        height: 130px;
        object-fit: cover;
        vertical-align: top;
    }
    .content{
        padding: 1.5rem;
        h4{
            font-size: 1.5rem;
            margin: 0 0 20px;
        }
        p{
            margin: 0;
            line-height: 1.5rem;
        }
        .btn-more{
            background: black;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            text-decoration: none;
            margin-top: 30px;
            display:inline-block;
        }
    }
    &:hover {
        border: 1px solid #ccc;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 7px 2px;
    }
`

function Country({
    flag,
    name,
    population,
    region,
    code,
}) {

    return (
        <CountryStyled>
            <img loading="lazy" src={flag} alt={name} />
            <div className="content">
                <h4>{name}</h4>
                <p><b>Población: </b>{population}</p>
                <p><b>Region: </b>{region}</p>
                <Link className="btn-more" to={`/country/${code}`}>
                    Ver detalles
                </Link>
            </div>
        </CountryStyled>
    )
}
export default Country;