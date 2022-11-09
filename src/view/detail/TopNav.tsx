import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const Wrapper = styled.nav`
  width: 100%;
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

  > div {
    width: 50%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    > .text {
      color: #b3eeca;
    }

    > .number {
      color: white;
      font-size: 20px;
      padding: 12px;
    }
  }
`
const TopNav: React.FC = () => {
    const [years, setYears] = useState<number[]>([])
    const [months, setMonths] = useState<string[]>([])
    const [selectDate, setSelectDate] = useState({year: dayjs().format('YYYY'), month: dayjs().format('MM')})
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
        if (date.length === 4) {
            setSelectDate({
                year: date,
                month: selectDate.month
            })
        } else {
            setSelectDate({
                year: selectDate.year,
                month: date
            })
        }
    }
    return (
        <Wrapper>
            <Title>布朗奇 记账</Title>
            <Times>
                <div className="year">
                    <select id="year" name="year"
                            value={selectDate.year}
                            onChange={(e) => onChange(e)}>
                        {years.map(year => <option key={year} value={year}>{year}</option>)}
                    </select>
                    年
                </div>
                <div className="month">
                    <select value={selectDate.month}
                            onChange={(e) => onChange(e)}>
                        {months.map(month =>
                            <option key={month} value={month}
                            >{month}</option>)}
                    </select>
                    月
                </div>
            </Times>
            <Tabs>
                <div>
                    <span className="text">总支出（元）</span>
                    <span className="number">{100.00}</span>
                </div>
                <div>
                    <span className="text">总收入（元）</span>
                    <span className="number">{100.00}</span>
                </div>
            </Tabs>
        </Wrapper>
    )
}
export {TopNav}