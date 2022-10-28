import Nav from "./Nav";
import React from "react";
import styled from "styled-components";
import App from "../App";

const AppWrapper = styled.div`
  height: 100vh;

`
const Wrapper = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  height: 90vh;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const Layout = (props: any) => {
    return (
        <AppWrapper>
            <Wrapper>
                <Main className={props.className}>{props.children}</Main>
                <Nav/>
            </Wrapper>
        </AppWrapper>
    );
}

export default Layout