import React, {useEffect, useState} from "react";
import {EChartOption} from "echarts";
import {Charts} from "view/statistics/Charts";
import styled from "styled-components";
import {useData} from "hooks/useData";

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
    const {getDataByDate, getDataByTag} = useData()
    useEffect(() => {
        getPieData()
    }, [props.category])
    const getPieData = () => {
        const map = getDataByTag()
        let data: PieData[] = []
        map.forEach((v, k) => {
            let value = 0
            value = props.category === '-' ? v.outcome : v.income
            data.push({value, name: k})
        })
        data = data.filter(d => d.value !== 0)
        data.sort((a, b) => a.value - b.value)
        let pieColor = props.category === '+' ? '#f2b52d' : '#2db970';
        setPieOptions({
            title: {
                show: true,
                text: '消费项目',
                left: 20,
                top: 0,
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
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '金额明细',
                    type: 'pie',
                    // clickable: 'false',　　　　　　 //是否开启点击
                    minAngle: 15,           　　 //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                    avoidLabelOverlap: true,   //是否启用防止标签重叠策略
                    hoverAnimation: false,　　  //是否开启 hover 在扇区上的放大动画效果。
                    radius: ['40%', '70%'],
                    // colorBy: 'series',
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2,
                        color: pieColor,
                    },
                    labelLine: {
                        show: true,
                        lineStyle: {
                            color: '#c7c7c7'
                        }
                    },
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#c7c7c7'
                    },
                    data
                }
            ]
            // tooltip: {
            //     trigger: 'item'
            // },
            // legend: {
            //     top: '5%',
            //     left: 'center'
            // },
            // series: [
            //     {
            //         name: '消费分类',
            //         type: 'pie',
            //         radius: ['40%', '70%'],
            //         avoidLabelOverlap: false,
            //         itemStyle: {
            //             borderRadius: 10,
            //             borderColor: '#fff',
            //             borderWidth: 2
            //         },
            //         label: {
            //             show: false,
            //             position: 'center'
            //         },
            //         emphasis: {
            //             label: {
            //                 show: true,
            //                 fontSize: 40,
            //                 fontWeight: 'bold'
            //             }
            //         },
            //         labelLine: {
            //             show: false
            //         },
            //         data
            //     }
            // ]
        })
    }

    return (
        <Wrapper>
            <Charts options={pieOptions}/>
        </Wrapper>
    )
}
export {StatisticsContent}