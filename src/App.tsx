import React from "react";
import {HashRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import 'index.scss'
import Details from "view/Details";
import Money from "view/Money";
import Statistics from "view/Statistics";
import NoMatch from "view/NoMatch";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/details" element={<Details/>}/>
                <Route path="/money" element={<Money/>}/>
                <Route path="/statistics" element={<Statistics/>}/>
                <Route path="/" element={<Navigate replace to="/money"/>}/>
                {/*<Route path="/" element={<Money/>}/>*/}
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </Router>
    );
}

export default App;
