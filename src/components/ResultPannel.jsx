import React from 'react';
import styled from 'styled-components';

const Pannel = styled.h1`
     grid-area: total;
    background-color: #333;
    color: white;
    margin: 0;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 4rem;
`

const ResultPannel = ({data}) => (
        <Pannel >{data}</Pannel>
    );

export default ResultPannel;