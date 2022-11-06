import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 0 16px;
  background: #f5f5f5;
  display: flex;
  align-items: center;

  > label {
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    height: 64px;
    width: 100%;
    border: none;
    background: none;
  }
`
type Props = {
    note: string,
    onChange: (note: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
    let note = props.note
    const refInput = useRef<HTMLInputElement>(null)
    const onBlur = () => {
        if (refInput.current !== null) {
            props.onChange(refInput.current.value)
        }
    }
    return (
        <Wrapper>
            <label>备注</label>
            <input type="text" placeholder="请在这里输入备注"
                   ref={refInput}
                   key={note}
                   defaultValue={note}
                   onBlur={onBlur}
            />
        </Wrapper>
    )

}
export {NoteSection}