import React, {useEffect, useState} from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import {useRecords} from "hooks/useRecords";

const Wrapper = styled.nav`
  width: 100%;
  padding-bottom: 12px;
  background: #2db970;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 1;
`
const Title = styled.div`
  text-align: center;
  color: white;
  font-size: 24px;
  padding: 16px 0;
  width: 100%;
`
const Times = styled.div`
  border-right: 1px dashed #b3eeca;
  width: 33.333%;
  text-align: center;
  padding: 18px;

  > .year {
    color: #b3eeca;
  }

  > .month {
    font-size: 16px;
    color: white;

    > select {
      font-size: 30px;
      padding: 10px;
    }
  }
`
const Tabs = styled.div`
  flex: 1;
  display: flex;
  max-width: 66%;

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    word-break: break-word;

    > .text {
      color: #b3eeca;
      margin-bottom: 12px;
    }

    > .number {
      color: white;
      font-size: 20px;
    }
  }
`

type LocalDate = {
    year: string,
    month: string
}
type Props = {
    selectDate: LocalDate,
    onChange: (date: LocalDate) => void
}
const TopNav: React.FC<Props> = (props) => {
    const [years, setYears] = useState<number[]>([])
    const [months, setMonths] = useState<string[]>([])
    const {getAccount} = useRecords()
    useEffect(() => {
        let y = []
        let m = []
        for (let i = 0; i < 10; i++) {
            y.push(dayjs().get("year") - i)
        }
        for (let i = 0; i < 12; i++) {
            let x = i + 1
            if (x < 10) m.push('0' + x)
            else m.push(x.toString())
        }
        setYears(y)
        setMonths(m)
    }, [])

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let date = e.target.value
        let localDate: LocalDate
        if (date.length === 4) {
            localDate = {
                year: date,
                month: props.selectDate.month
            }
        } else {
            localDate = {
                year: props.selectDate.year,
                month: date
            }
        }
        props.onChange(localDate)
    }
    return (
        <Wrapper>
            <Title>????????? ??????</Title>
            <Times>
                <div className="year">
                    <select id="year" name="year"
                            value={props.selectDate.year}
                            onChange={(e) => onChange(e)}>
                        {years.map(year => <option key={year} value={year}>{year}</option>)}
                    </select>
                    ???
                </div>
                <div className="month">
                    <select value={props.selectDate.month}
                            onChange={(e) => onChange(e)}>
                        {months.map(month =>
                            <option key={month} value={month}
                            >{month}</option>)}
                    </select>
                    ???
                </div>
            </Times>
            <Tabs>
                <div>
                    <span className="text">??????????????????</span>
                    <span className="number">{getAccount(props.selectDate, '-')}</span>
                </div>
                <div>
                    <span className="text">??????????????????</span>
                    <span className="number">{getAccount(props.selectDate, '+')}</span>
                </div>
            </Tabs>
        </Wrapper>
    )
}
export {TopNav}