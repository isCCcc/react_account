import styled from "styled-components";
import React, {useRef, useState} from "react";

const Wrapper = styled.section`
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
const NoteSection:React.FC=()=>{
    const [note,setNote]=useState<string>('')
    const refInput = useRef<HTMLInputElement>(null)
    const onBlur=()=>{
        if(refInput.current!==null){
            setNote(refInput.current.value)
        }
        console.log(note)
    }
    return(
        <Wrapper>
            <label>备注</label>
            <input type="text" placeholder="请在这里输入备注"
                   ref={refInput}
                   defaultValue={note}
                   onBlur={onBlur}
            />
        </Wrapper>
    )

}
export {NoteSection}