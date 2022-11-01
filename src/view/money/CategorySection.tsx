import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
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
        &-out {
          background: #e7f7f0;
          color: #2db970;

          ::after {
            background: #2db970;
            content: '';
            display: block;
            height: 4px;
            position: absolute;
            width: 100%;
            bottom: 0;
          }
        }

        &-in {
          background: #fff7ea;
          color: #f2b52d;

          ::after {
            content: '';
            display: block;
            height: 4px;
            background: #f2b52d;
            position: absolute;
            width: 100%;
            bottom: 0;
          }
        }
      }
    }
  }
`
const CategorySection: React.FC = () => {
    const [selected, setSelected] = useState<('+' | '-')>('-')
    const toggleSelected = (category: ('+' | '-')) => {
        setSelected(category)
    }
    return (
        <Wrapper>
            <ol>
                <li onClick={()=>toggleSelected('-')} className={selected === '-' ? 'selected-out' : ''}>支出</li>
                <li onClick={()=>toggleSelected('+')} className={selected === '+' ? 'selected-in' : ''}>收入</li>
            </ol>
        </Wrapper>
    )
}
export {CategorySection}