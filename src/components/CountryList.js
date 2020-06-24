import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import Country from './Country';

const CountryListStyled = Styled.div `
    width: 100%;
    box-sizing: border-box;
    padding: 40px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
    grid-gap: 30px;
    margin: 60px auto;
`

function CountryList(){
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all/')
        .then(response => response.json())
        .then(data => setCountries(data));
    }, [])

    return (
        
        <CountryListStyled>
            {countries.map(country => (
                <Country  
                    key={country.alpha3Code}
                    flag={country.flag}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    code={country.callingCodes}
                />
            ))}     
        </CountryListStyled>
    )
}

export default CountryList;