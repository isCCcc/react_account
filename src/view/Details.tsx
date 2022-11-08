import Layout from "components/Layout";
import React from "react";
import {TopNav} from "./detail/TopNav";
import {Content} from "./detail/Content";

function Details() {
    return (
        <Layout>
            <TopNav></TopNav>
            <Content></Content>
        </Layout>
    );
}
export default Details