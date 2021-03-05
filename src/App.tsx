import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
`;

const StudyNotes = styled.div`
  flex: 50%;
  padding: 4px;
`;

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.

  // Return the App component.
  return (
    <Container>
      <GlobalStyle />
      <h1>Copy & Paste: Select Controls</h1>
      <Study>
        <h2>Categories</h2>
        <StudyBody>
          <StudyNotes />
          <StudyNotes>
            <Categories>
              <Pill>content X</Pill>
              <Pill>content X</Pill>
              <Pill>content X</Pill>
            </Categories>
          </StudyNotes>
        </StudyBody>
      </Study>
    </Container>
  );
}

export default App;
