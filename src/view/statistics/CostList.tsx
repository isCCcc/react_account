import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useData} from "hooks/useData";
import {useTags} from "hooks/useTags";
import dayjs from "dayjs";

const Wrapper = styled.div`
  padding: 20px;
  color: #c7c7c7;
  background: white;
  font-size: 16px;
  display: flex;
  flex-direction: column;

  > ol {
    padding-top: 10px;

    > li {
      padding: 10px 0;
      width: 100%;
      display: flex;
    }
  }

  > .more {
    display: flex;
    justify-content: center;
    color: #2db970;
    font-size: 14px;
    padding: 20px 10px;
    margin: 10px 0 0 0;

    > span {
      cursor: pointer;
      padding: 10px 4px 0 4px;
      margin: 0 10px;
      border-bottom: 1px solid #2db970;
    }

    > .no-more {
      color: #c7c7c7;
      font-size: 12px;
      cursor: default;
      border: none;
    }
  }
`
const Index = styled.div`
  padding: 0 24px 0 0;
  display: flex;
  align-items: center;

`
const Content = styled.div`
  border-bottom: 1px solid #c7c7c7;
  flex: 1;

  > .top, > .bottom {
    display: flex;
    justify-content: space-between;
    padding-bottom: 4px;
  }

  > .top {
    font-size: 18px;
    color: #333;
    padding-bottom: 8px;
  }

  > .bottom {
    font-size: 12px;
  }

`
type Props = {
    category: '-' | '+'
}
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
const CostList: React.FC<Props> = (props) => {
    const {getCostList, readMore, foldList} = useData()
    const {findTagById} = useTags()
    const [dataSource, setDataSource] = useState<{ data: Records[]; total: number; }>(getCostList(props.category))
    const [count, setCount] = useState<number>(10)
    useEffect(() => {
        setDataSource(getCostList(props.category))
    }, [props.category, count])
    const moreData = () => {
        setCount(readMore())
    }
    const foldData = () => {
        setCount(foldList())
    }

    //查看更多数据功能模块的展示处理
    const buttonDisplay = () => {
        let nowData = dataSource.data.length
        let totalData = dataSource.total
        if (nowData < 10 || totalData === 10) {
            return (
                <div className="more">
                    <div className="no-more">没有了...</div>
                </div>
            )
        } else if (nowData < totalData) {
            if (nowData === 10) {
                return (
                    <div className="more">
                    <span onClick={() => {
                        moreData()
                    }}>查看更多</span>
                    </div>
                )
            }
            return (
                <div className="more">
                    <span onClick={() => {
                        moreData()
                    }}>查看更多</span>
                    <span onClick={() => {
                        foldData()
                    }}>折叠数据</span>
                </div>
            )
        } else if (nowData === totalData) {
            return (
                <div className="more">
                    <span onClick={() => {
                        foldData()
                    }}>折叠数据</span>
                </div>
            )
        }
    }
    return (
        <Wrapper>
            <div>金额排行榜</div>
            <ol>{dataSource.data.map((record, index) => (
                < li key={record.r_id}>
                    < Index> {index + 1}</Index>
                    <Content>
                        <div className="top">
                            <span>{findTagById(record.tag)}</span>
                            <span>{record.category + record.amount}</span>
                        </div>
                        <div className="bottom">
                            <span>{record.note}</span>
                            <span>{dayjs(record.createAt).format('MM月DD日 HH:mm')}</span>
                        </div>
                    </Content>
                </li>
            ))}</ol>
            {buttonDisplay()}
        </Wrapper>
    )
}
export {CostList}