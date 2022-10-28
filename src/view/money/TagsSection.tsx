import styled from "styled-components";

const TagsSection = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #f7f7f7;
      color: #c7c7c7;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        color: #2db970;
        background: #e7f7f0;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    color: #999;
    border-bottom: 1px solid #c7c7c7;
    margin-top: 8px;
  }
`
export {TagsSection}