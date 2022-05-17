import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Container>
          <AppRouter />
        </Container>
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div`
  padding: 16px 0;
  max-width: 1920px;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;
