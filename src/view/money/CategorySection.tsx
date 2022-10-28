import styled from "styled-components";

const CategorySection = styled.section`
  outline: 1px solid #f5f5f5;

  > ol {
    > li {
      display: inline-block;
      width: 50%;
      font-size: 24px;
      height: 64px;
      line-height: 64px;
      text-align: center;
      position: relative;

      &.selected {
        background: #e7f7f0;
        color: #2db970;

        ::after {
          content: '';
          display: block;
          height: 4px;
          background: #2db970;
          position: absolute;
          width: 100%;
          bottom: 0;
        }
      }
    }
  }
`
export {CategorySection}