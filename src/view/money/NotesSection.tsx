import styled from "styled-components";

const NotesSection = styled.section`
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
export {NotesSection}