import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./money/CategorySection";
import {NoteSection} from "./money/NoteSection";
import {NumberPadSection} from "./money/NumberPadSection";
import {TagsSection} from "./money/TagsSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

function Money() {
    const [selected, setSelected] = useState({
        tag: '',
        note: '',
        category: '-' as Category,
        amount: 0
    })
    return (
        <MyLayout>
            {selected.tag}
            <hr/>
            {selected.note}
            <hr/>
            {selected.category}
            <hr/>
            {selected.amount}
            <TagsSection selected={selected.tag}
                         onChange={(tag) => setSelected({
                             ...selected,
                             tag: tag
                         })}/>
            <NoteSection note={selected.note}
                         onChange={(note) => setSelected({
                             ...selected,
                             note: note
                         })}/>
            <CategorySection category={selected.category}
                             onChange={(category) => setSelected({
                                 ...selected,
                                 category: category
                             })}/>
            <NumberPadSection amount={selected.amount}
                              onChange={(amount) => setSelected({
                                  ...selected,
                                  amount: amount
                              })}/>
        </MyLayout>
    );
}

export default Money