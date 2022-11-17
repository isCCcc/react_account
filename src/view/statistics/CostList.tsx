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
    margin-top: 10px;
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
const Button = styled.button`
  border: none;
  background: transparent;
  color: #2db970;
  border-bottom: 1px solid #2db970;
  font-size: 14px;
  padding: 4px;
  margin: 4px;
  cursor: pointer;
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
    const [dataSource, setDataSource] = useState<Records[]>(getCostList(props.category))
    const [count, setCount] = useState<number>(10)
    useEffect(() => {
        setDataSource(getCostList(props.category))
        console.log(count);

    }, [props.category, count])
    const moreData = () => {
        setCount(readMore())
    }
    const foldData = () => {
        setCount(foldList())
    }

    const buttonDisplay = () => {
        if (dataSource.length < count) {
            return (
                <div className="more">
                    <Button onClick={() => {
                        foldData()
                    }}>折叠数据</Button>
                </div>
            )
        } else {
            if (count > 10) {
                return (
                    <div className="more">
                        <Button onClick={() => {
                            moreData()
                        }}>查看更多</Button>
                        <Button onClick={() => {
                            foldData()
                        }}>折叠数据</Button>
                    </div>
                )
            } else {
                return (
                    <div className="more">
                        <Button onClick={() => {
                            moreData()
                        }}>查看更多</Button>
                    </div>
                )
            }
        }
    }
    return (
        <Wrapper>
            <div>金额排行榜</div>
            <ol>{dataSource.map((record, index) => (
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