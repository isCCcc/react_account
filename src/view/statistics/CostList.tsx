import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useData} from "hooks/useData";
import {useTags} from "../../hooks/useTags";
import dayjs from "dayjs";

const Wrapper = styled.div`
  padding: 20px;
  color: #c7c7c7;
  background: white;
`
const Index=styled.div``
const Content=styled.div``
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
        console.log(getCostList(props.category));
        setDataSource(getCostList(props.category))
    }, [props.category])
    return (
        <Wrapper>
            <div>金额排行榜</div>
            {
                dataSource.map((record, index) => (
                    <ol key={record.r_id}>
                        <li>
                            <Index>{index + 1}</Index>
                            <Content>
                                <div>
                                    <span>{findTagById(record.tag)}</span>
                                    <span>{record.category+record.amount}</span>
                                </div>
                                <div>
                                    <span>{record.note}</span>
                                    <span>{dayjs(record.createAt).format('MM月DD日 HH:mm')}</span>
                                </div>
                            </Content>
                        </li>
                    </ol>
                ))
            }
        </Wrapper>
    )
}
export {CostList}