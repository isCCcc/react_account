import Nav from "components/Nav";
import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  height: 100vh;
`
const Wrapper = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 500px) {
    height: 90vh;
    width: 375px;
  }
`
const Main = styled.div`
  flex-grow: 1;
  background: #ebebeb;
  //隐藏滚动条，但可滚动页面
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0 !important
  }
  /* IE 10+ */
  -ms-overflow-style: none;
  /* Firefox */
  overflow: -moz-scrollbars-none;
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