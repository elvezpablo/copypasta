import React, {useState} from 'react';
import styled from 'styled-components';
import { Popover } from 'react-tiny-popover'
import { Pill } from './Pill';
import { cbs } from './data/categories';
import { useControls } from "leva";

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
    max-height: 300px;
    min-height: 1rem;
`;

const PopOver = styled.div`
    background-color: #FFF;
    border: 2px solid #CCC;
    padding: 3px;
    border-radius: 3px;
    
`;


const Input = styled.input`
            background-color: rgb(251, 251, 253);
    border-color: rgb(210, 212, 220);
    border-radius: 0.125rem;
    border-style: solid;
    border-width: 0.0625rem;
    box-sizing: border-box;
    color: rgb(36, 40, 66);
    font-family: Asap;
    font-size: 0.938rem;
    padding: 0.0625rem 0.75rem;
    appearance: none;
    height: 2.25rem;
    width: 100%;
`

const ListComponent = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const { categories } = useControls({
        categories: {
            value: 40,
            min: 0,
            max: 500,
            step: 10
        } })
    return (
        <Container>
            <Header>
                <Label>categories ({Math.round(categories)})</Label>
                <Popover
                    isOpen={isPopoverOpen}
                    padding={10}
                    align={'start'}
                    positions={['left','bottom' ,'top' ]} // preferred positions by priority
                    content={<PopOver>
                    <h4>Categories</h4>
                        <Input placeholder="Type to search" />
                    </PopOver>}
                >
                    <MiniButton onClick={() => {setIsPopoverOpen(!isPopoverOpen)}}>...</MiniButton>
                </Popover>
                
            </Header>
            <List>
                {cbs.slice(0,categories).map(c => (<Pill key={c.fullTitle}>{c.fullTitle}</Pill>))}
            </List>
        </Container>
    )
}

export default ListComponent;