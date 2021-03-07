import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ListComponent from "./ListComponent";


const GlobalStyle = createGlobalStyle`
  font-family: Asap;
`;

const Container = styled.div`
  font-family: Asap;
`;

const Study = styled.div`
  border: 1px solid #ccc;
`;

const Categories = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Pill = styled.div`
  background-color: #000;
  color: white;
  font-size: 14px;
  display: inline-block;
  padding: 3px;
  border-radius: 4px;
  margin-right: 6px;
`;

const StudyBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StudyNotes = styled.div`  
  padding: 4px;
`;

const StudyComponents = styled.div`
  width: 50%;
  padding: 4px;
`;

interface AppProps { }



function App({ }: AppProps) {
  // Create the count state.

  // Return the App component.
  return (
    <Container>
      <GlobalStyle />
      <h1>Copy & Paste: Select Controls</h1>
      <Study>
        <h2>Categories</h2>
        <StudyBody>
          <StudyNotes >
            <h4>Center Ellipsis Pills</h4>
            <ul>
              <li>{`Categories list from CBS shows 500 categories of various lengths.`}</li>
              <li>{`Ellipsis show the beginning and end of long categories. `}</li>
              <li>{`Hovering over the pill moves the ellipsis to the end. `}</li>
            </ul>
            </StudyNotes>
          <StudyComponents>            
            <ListComponent />
          </StudyComponents>
        </StudyBody>
      </Study>
    </Container>
  );
}

export default App;
