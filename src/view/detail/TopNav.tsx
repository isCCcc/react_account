import React, {useEffect, useState} from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const Wrapper = styled.nav`
  width: 100vw;
  background: #2db970;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
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
    const [months, setMonths] = useState<number[]>([])
    useEffect(() => {
        let y = []
        let m = []
        for (let i = 0; i < 10; i++) {
            y.push(dayjs().get("year") - i)
        }
        for (let i = 0; i < 12; i++) {
            m.push(i + 1)
        }
        setYears(y)
        setMonths(m)
    }, [])
    return (
        <Wrapper>
            <Title>布朗奇 记账</Title>
            <Times>
                <div className="year">
                    <select id="year" name="year" value={dayjs().format('YYYY')}>
                        {years.map(year => <option key={year} value={year}>{year}</option>)}
                    </select>
                    年
                </div>
                <div className="month">
                    <select id="month" name="month" value={dayjs().format('M')}>
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