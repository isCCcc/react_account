import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import {CategorySection} from "./money/CategorySection";
import {NoteSection} from "./money/NoteSection";
import {NumberPadSection} from "./money/NumberPadSection";
import {TagsSection} from "./money/TagsSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
function Money() {
    return (
        <MyLayout>
            <TagsSection />
            <NoteSection />
            <CategorySection />
            <NumberPadSection />
        </MyLayout>
    );
}

export default Money