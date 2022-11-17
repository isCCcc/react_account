import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import {EChartOption} from "echarts";

type BaseChartProps ={
    options: EChartOption
};
const Charts: React.FC<BaseChartProps> = ({ options }) => {

    const chartRef = useRef<HTMLInputElement>(null);
    const [chart, setChart] = useState<echarts.ECharts>();

    const handleResize = () => {
        chart?.resize();
    };

    const initChart = () => {
        if (chart) {
            window.removeEventListener("resize", handleResize);
            chart?.dispose();
        }

        const newChart = echarts?.init(chartRef?.current as HTMLElement);
        newChart.setOption(options, true);
        window.addEventListener("resize", handleResize);
        setChart(newChart);
    };

    useEffect(() => {
        initChart();
    }, [options])

    return <div ref={chartRef} style={{ height: "45%", width: "100%" ,background:'white'}} />
};

export {Charts};