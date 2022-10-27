import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  //border: 2px solid red;
  text-align: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  max-width: 700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const Layout = (props: any) => {
    return (
        <Wrapper>
            <Main>{props.children}</Main>
            <Nav/>
        </Wrapper>
    );
}

export default Layout