import Layout from "components/Layout";
import React, {useEffect, useState} from "react";
import {TopNav} from "./detail/TopNav";
import {Content} from "./detail/Content";
import dayjs from "dayjs";

type LocalDate = {
    year: string,
    month: string
}

function Details() {
    const [date, setDate] = useState<LocalDate>({year: dayjs().format('YYYY'), month: dayjs().format('MM')})
    useEffect(() => {
        if (localStorage.getItem('selectedDate') === null) {
            saveSelectedDate({year: dayjs().format('YYYY'), month: dayjs().format('MM')})
        }
        setDate(JSON.parse(localStorage.getItem('selectedDate')!))
    }, [])
    const onChange = (date: LocalDate) => {
        // setDate(date)
        saveSelectedDate(date)
    }
    const saveSelectedDate = (date: LocalDate) => {
        localStorage.setItem('selectedDate', JSON.stringify(date))
        setDate(date)
    }
    return (
        <Layout>
            <TopNav selectDate={date} onChange={(date: LocalDate) => onChange(date)}/>
            <Content selectDate={date}/>
        </Layout>
    );
}

export default Details