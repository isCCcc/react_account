import React from "react";
import {
    HashRouter as Router,
    Route,
    Routes, useLocation, Navigate
} from "react-router-dom";
import './index.scss'
import Layout from "./components/Layout";

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
        <Layout>
            <h2>明细页面</h2>
        </Layout>
    );
}

function Money() {
    return (
        <Layout>
            <h2>记账页面</h2>
        </Layout>
    );
}

function Statistics() {
    return (
        <Layout>
            <h2>统计页面</h2>
        </Layout>
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
