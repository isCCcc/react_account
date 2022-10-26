import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes, useLocation, Navigate
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/details">明细</Link>
                    </li>
                    <li>
                        <Link to="/money">记账</Link>
                    </li>
                    <li>
                        <Link to="/statistics">统计</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path="/details" element={<Details/>}/>
                    <Route path="/money" element={<Money/>}/>
                    <Route path="/statistics" element={<Statistics/>}/>
                    <Route path="/" element={<Navigate replace to="/money"/> }/>
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
            </div>
        </Router>
    );
}

function Details() {
    return (
        <div>
            <h2>明细页面</h2>
        </div>
    );
}

function Money() {
    return (
        <div>
            <h2>记账页面</h2>
        </div>
    );
}

function Statistics() {
    return (
        <div>
            <h2>统计页面</h2>
        </div>
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
