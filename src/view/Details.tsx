import Layout from "components/Layout";
import React, {useState} from "react";
import {TopNav} from "./detail/TopNav";
import {Content} from "./detail/Content";
import dayjs from "dayjs";

type LocalDate={
    year:string,
    month:string
}
function Details() {
    const [date,setDate]=useState<LocalDate>({year: dayjs().format('YYYY'), month: dayjs().format('MM')})
    const onChange=(date:LocalDate)=>{
        setDate(date)
    }
    return (
        <Layout>
            <TopNav selectDate={date} onChange={(date:LocalDate)=>onChange(date)} />
            <Content selectDate={date}/>
        </Layout>
    );
}
export default Details