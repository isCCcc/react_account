import React, {useEffect, useState} from "react";
import {EChartOption} from "echarts";
import {Charts} from "view/statistics/Charts";
import styled from "styled-components";
import {useData} from "hooks/useData";
import dayjs from "dayjs";

const Wrapper = styled.section`
  flex-grow: 1;
  background: white;
`
type Props = {
    category: ('+' | '-'),
}
type PieData = {
    value: number,
    name: string
}
const StatisticsContent: React.FC<Props> = (props) => {
    let [pieOptions, setPieOptions] = useState<EChartOption>({})
    let [barOptions, setBarOptions] = useState<EChartOption>({})
    const {getDataByDate, getDataByTag} = useData()
    useEffect(() => {
        pieChartOptions()
        barChartOptions()
    }, [props.category])
    const pieChartOptions = () => {
        const data = getPieData()
        let pieColor = props.category === '+' ? '#f2b52d' : '#2db970';
        setPieOptions({
            title: {
                show: true,
                text: '消费项目',
                left: 20,
                top: 10,
                textStyle: {
                    color: '#666',
                    fontWeight: 'normal'
                }
            },
            tooltip: {
                show: true,
                trigger: 'item',
                alwaysShowContent: false,
            },
            series: [
                {
                    name: '金额明细',
                    type: 'pie',
                    minAngle: 15,           　　 //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                    avoidLabelOverlap: true,   //是否启用防止标签重叠策略
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#c7c7c7'
                    },
                    labelLine: {
                        show: true,
                        lineStyle: {
                            color: '#c7c7c7'
                        }
                    },
                    radius: ['40%', '70%'],
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2,
                        color: pieColor,
                    },
                    data
                }
            ]
        })
    }
    const getPieData = () => {
        const map = getDataByTag()
        let data: PieData[] = []
        map.forEach((v, k) => {
            let value = props.category === '-' ? v.outcome : v.income
            data.push({value, name: k})
        })
        data = data.filter(d => d.value !== 0)
        data.sort((a, b) => a.value - b.value)
        return data
    }

    const barChartOptions = () => {
        const data = getBarData()
        const key = data.map(d => dayjs(d.date).format('M-D'))
        const values = data.map(d => d.value)
        const barColor = props.category === '-' ? '#2db970' : '#f2b52d';
        setBarOptions({
            title: {
                show: true,
                text: '每日对比',
                left: 20,
                top: 10,
                bottom: 10,
                textStyle: {
                    color: '#666',
                    fontWeight: 'normal'
                }
            },
            tooltip: {
                show: true,
                trigger: 'axis',
                triggerOn: 'click',
                borderColor: barColor,
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255,255,255,0.6)',
                textStyle: {
                    color: '#666'
                },
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3)'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: 0,
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    data: key,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '消费金额',
                    type: 'bar',
                    barWidth: '60%',
                    data: values,
                    itemStyle: {
                        color: barColor,
                    }
                }
            ]
        })
    }
    const getBarData = () => {
        let dataSource = getDataByDate()
        let localDate = JSON.parse(localStorage.getItem('selectedDate')!)
        localDate = localDate.year + '-' + localDate.month
        const endDay = dayjs(localDate).endOf('month').format('YYYY-MM-DD')
        const array = [];
        const day = parseInt(dayjs(localDate).endOf('month').format('D'));
        for (let i = 0; i < day; i++) {
            const dateString = dayjs(endDay).subtract(i, 'day').format('YYYY-MM-DD');
            const find = dataSource.find(item => item.date === dateString)
            if (props.category === '-') {
                array.push({date: dateString, value: find ? find.outcome : 0})
            } else if (props.category === '+') {
                array.push({date: dateString, value: find ? find.income : 0})
            }
        }
        return array.reverse()
    }
    return (
        <Wrapper>
            <Charts options={pieOptions}/>
            <Charts options={barOptions}/>
        </Wrapper>
    )
}
export {StatisticsContent}