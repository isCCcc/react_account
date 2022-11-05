import Layout from "components/Layout";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {CategorySection} from "view/money/CategorySection";
import {NoteSection} from "view/money/NoteSection";
import {NumberPadSection} from "view/money/NumberPadSection";
import {TagsSection} from "view/money/TagsSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

function Money() {
    const [selected, setSelected] = useState({
        tag: -1,
        note: '',
        category: '-' as Category,
        amount: '0'
    })
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <MyLayout>
            <TagsSection selected={selected.tag}
                         category={selected.category}
                         onChange={tag => onChange({tag})}/>
            <NoteSection note={selected.note}
                         onChange={note => onChange({note})}/>
            <CategorySection category={selected.category}
                             onChange={category => onChange({category})}/>
            <NumberPadSection selected={selected}
                              onChange={amount => onChange({amount})}/>
        </MyLayout>
    );
}

export default Money