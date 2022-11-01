import styled from "styled-components";
import React, {useRef} from "react";

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
type Props={
    note:string,
    onChange:(note:string)=>void
}
const NoteSection:React.FC<Props> =(props)=>{
    // const [note,setNote]=useState<string>('')
    const note=props.note
    const refInput = useRef<HTMLInputElement>(null)
    const onBlur=()=>{
        if(refInput.current!==null){
            props.onChange(refInput.current.value)
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