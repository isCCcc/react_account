import React, {useEffect} from "react";
import {useRecords} from "hooks/useRecords";
import styled from "styled-components";
import Icon from "components/Icon";
import {useTags} from "hooks/useTags";
import {NavLink} from "react-router-dom";

const Wrapper = styled.section`
  > ol {
    margin: 14px;
    border-radius: 10px;
    background: white;

    .title {
      border-radius: 10px 10px 0 0;
      display: flex;
      padding: 10px 15px;
      background: #fafafa;
      justify-content: space-between;
      align-items: center;

      > span {
        display: flex;
        align-items: center;

        .icon {
          width: 18px;
          height: 18px;
          fill: #c7c7c7;
          margin-right: 4px;
        }
      }

    }

    > ul {
      padding-bottom: 5px;

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

          > .tag {
            position: absolute;
            left: 10px;
          }

          > .note {
            width: 94%;
            position: absolute;
            left: 10px;
            bottom: 6px;
            font-size: 12px;
            color: #c7c7c7;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          > .amount {
            position: absolute;
            right: 10px;
          }
        }
      }
    }
  }
`
const Tips = styled.div`
  margin-top: 40%;
  font-size: 20px;
  margin-left: 50%;
  transform: translateX(-50%);

  > a {
    padding: 0 2px;
    color: #2db970;
    border-bottom: 1px solid #2db970;
  }
`

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

type LocalDate = {
    year: string,
    month: string
}
type Props = {
    selectDate: LocalDate,
}
const Content: React.FC<Props> = (props) => {
    const {getRecordsData} = useRecords()
    const {findTagById} = useTags()
    // 获取初始数据 && 监听日期选择变化，更新数据
    useEffect(() => {
        getRecordsData(props.selectDate)
        console.log(getRecordsData(props.selectDate));

    }, [props.selectDate])

    //渲染数据
    const hasData = () => {
        return (
            getRecordsData(props.selectDate).map(list =>
                <ol key={list[0]}>
                    <div className="title">
                        <span>{list[0]}</span>
                        <span>
                            <Icon name="spend"/>
                            {list[2].total}
                        </span>
                    </div>
                    <ul>
                        {list[1].map((item: Records) =>
                            <li key={item.r_id}>
                                <Icon name={item.category === '-' ? 'outcome' : 'income'}/>
                                <div>
                                    <span className="tag">{findTagById(item.tag)}</span>
                                    <span className="note">{item.note}</span>
                                    <span className="amount">{item.category}{item.amount}</span>
                                </div>
                            </li>
                        )}
                    </ul>
                </ol>)
        )
    }
    const noData = () => {
        return (
            <Tips>暂无数据，<NavLink to="/money">去记一笔</NavLink></Tips>
        )
    }
    return (
        <Wrapper>{getRecordsData(props.selectDate).length === 0 ? noData() : hasData()}</Wrapper>
    )
}
export {Content}