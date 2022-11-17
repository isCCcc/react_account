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

  > ol {
    padding-top: 10px;

    > li {
      padding: 10px 0;
      width: 100%;
      display: flex;
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
    const {getCostList} = useData()
    const {findTagById} = useTags()
    const [dataSource, setDataSource] = useState<Records[]>(getCostList(props.category))
    useEffect(() => {
        setDataSource(getCostList(props.category))
    }, [props.category])
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
        </Wrapper>
    )
}
export {CostList}