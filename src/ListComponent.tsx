import React from 'react';
import styled from 'styled-components';
import {Pill} from './Pill';

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
    border: 1px solid #666;
    border-radius: 3px;
    padding: 4px;
`;

const ListComponent = () => {
    return (
        <Container>
            <Header>
                <Label>categories</Label>
                <MiniButton>...</MiniButton>
            </Header>
            <List>
                <Pill>Hey X</Pill>
            </List>
        </Container>
    )
}

export default ListComponent;