import React, {useEffect, useState} from "react";
import {EChartOption} from "echarts";
import {Charts} from "view/statistics/Charts";
import styled from "styled-components";
import {useRecords} from "hooks/useRecords";
import {useData} from "../../hooks/useData";

const Wrapper = styled.section`
  flex-grow: 1;
  background: white;
`
const StatisticsContent: React.FC = () => {
    let [options, setOptions] = useState<EChartOption>({})
    useEffect(() => {
        setOptions({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 1048, name: 'Search Engine'},
                        {value: 735, name: 'Direct'},
                        {value: 580, name: 'Email'},
                        {value: 484, name: 'Union Ads'},
                        {value: 300, name: 'Video Ads'}
                    ]
                }
            ]
        })
    }, [])

    const {getDataByDate,getDataByTag}=useData()
    useEffect(()=>{
        console.log(getDataByDate());
        console.log(getDataByTag());
    },[])


    return (
        <Wrapper>
            <Charts options={options}/>
        </Wrapper>
    )
}
export {StatisticsContent}