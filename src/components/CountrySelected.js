import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const CountrySelectedStyled = Styled.div `

margin-top:80px;
    .back-btn{
        background: black;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 15px 30px;
        text-decoration: none;
        display: inline-block;
        margin-top: 40px;
    }
    .countryDetails{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 30px;
        .flag{
            img{
                width: 100%;
                height:auto;
            }
        }
        .content{
            h1{
                text-align: left;
            }
        }
        @media screen and (min-width: 767px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

`

function CountrySelected({ match, history }) {
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/callingcode/${match.params.id}`)
        .then(response => response.json())
        .then(data => setCountry(data[0]));
    }, [country, match.params.id]);

    function handleClick() {
        history.goBack()
    }

    return (
        <CountrySelectedStyled>
            <div className="countryDetails">
                <div className="flag">
                    <img src={country.flag} alt={country.name} />
                </div>
                <div className="content">
                    <h1>{country.name}</h1>
                    <p><b>Capital: </b>{country.capital}</p>
                    <p><b>Población: </b>{country.population}</p>
                    <p><b>Region: </b>{country.region}</p>
                    <p><b>Subregion: </b>{country.subregion}</p>
                    <p><b>Area: </b>{country.area}</p>
                </div>
            </div>
            <button className="back-btn" onClick={handleClick}>Regresar</button>
        </CountrySelectedStyled>
    )
}

export default CountrySelected;