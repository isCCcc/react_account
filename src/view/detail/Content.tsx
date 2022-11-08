import React, {useEffect} from "react";
import {useRecords} from "hooks/useRecords";
import styled from "styled-components";
import Icon from "components/Icon";
import {useTags} from "hooks/useTags";

type Record = {
    tag: number
    note: string
    category: '-' | '+'
    amount: string
}
type Records = {
    r_id: number,
    createAt: number
} & Record

const Wrapper = styled.section`
  > ol {
    margin: 14px;
    border-radius: 10px;
    background: white;

    .title {
      border-radius: 10px 10px 0 0;
      display: flex;
      padding: 8px 15px;
      background: #fafafa;
    }

    > ul {
      > li {
        padding: 5px 16px;
        display: flex;

        > .icon {
          width: 40px;
          height: 56px;

          &.outcome {
            fill: #2db970;
          }

          &.income {
            fill: #f2b52d;
          }
        }

        > div {
          width: 100%;
          position: relative;
          border-bottom: 1px solid #c7c7c7;
          font-size: 18px;
          padding: 6px;
          >.tag{
            position: absolute;
            left: 10px;
          }
          >.note{
            position: absolute;
            left: 10px;
            bottom: 6px;
            font-size: 12px;
            color: #c7c7c7;
          }
          >.amount{
            position: absolute;
            right: 10px;
          }
        }
      }
    }
  }
`

const Content: React.FC = () => {
    const {getRecords} = useRecords()
    const {findTagById}=useTags()
    useEffect(() => {
        getRecords()
    })
    return (
        <Wrapper>
            {
                getRecords().map(list =>
                    <ol key={list[0]}>
                        <span className="title">{list[0]}</span>
                        <ul>
                            {list[1].map((item: Records) =>
                                <li key={item.r_id}>
                                    <Icon name={item.category === '-' ? 'outcome' : 'income'}/>
                                    <div>
                                        <span className="tag">{findTagById(item.tag)}</span>
                                        <span className="note">{item.note}</span>
                                        <span className="amount">{item.amount}</span>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </ol>)
            }
        </Wrapper>
    )
}
export {Content}