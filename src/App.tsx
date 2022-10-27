import React from "react";
import {
    HashRouter as Router,
    Route,
    Routes, useLocation, Navigate
} from "react-router-dom";
import './index.scss'
import styled from "styled-components";
import Nav from "./components/Nav";

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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/details" element={<Details/>}/>
                <Route path="/money" element={<Money/>}/>
                <Route path="/statistics" element={<Statistics/>}/>
                <Route path="/" element={<Navigate replace to="/money"/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </Router>
    );
}

function Details() {
    return (
        <Wrapper>
            <Main>
                <h2>明细页面</h2>
            </Main>
            <Nav/>
        </Wrapper>
    );
}

function Money() {
    return (
        <Wrapper>
            <Main>
                <h2>记账页面</h2>
            </Main>
            <Nav/>
        </Wrapper>
    );
}

function Statistics() {
    return (
        <Wrapper>
            <Main>
                <h2>统计页面</h2>
            </Main>
            <Nav/>
        </Wrapper>
    );
}

function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default App;
