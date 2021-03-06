import React from 'react';
import styled from 'styled-components';
import { Pill } from './Pill';
import { cbs } from './data/categories';

const Container = styled.div`
 background-color: rgba(200,200,200,.3) ;
 border-radius: 3px;
 padding: 4px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Label = styled.label`
    text-transform: uppercase;
    font-family: "Roboto Condensed";
`;

const MiniButton = styled.button`
    border: none;
    border-radius: 8px;
    background-color: black;
    color: white;
    cursor: pointer;
`;

const List = styled.div`
    margin-top: 4px;
    border: 2px solid #999;
    border-radius: 3px;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    max-height: 300px
`;

const ListComponent = () => {
    return (
        <Container>
            <Header>
                <Label>categories</Label>
                <MiniButton>...</MiniButton>
            </Header>
            <List>
                {cbs.map(c => (<Pill>{c.fullTitle}</Pill>))}
            </List>
        </Container>
    )
}

export default ListComponent;