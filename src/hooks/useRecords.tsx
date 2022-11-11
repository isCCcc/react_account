import {useEffect, useState} from "react";
import {createRecordId} from "lib/createId";
import {floatNumber} from "view/money/NumberPadSection/floatNumber";
import dayjs from "dayjs";

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

const useRecords = () => {
    const [records, setRecords] = useState<Records[]>([])
    const [filterRecords, setFilterRecords] = useState<Records[]>([])
    useEffect(() => {
        let localRecords = JSON.parse(localStorage.getItem('records') || '[]')
        setRecords(localRecords)
        selectedRecords({year: 2022, month: 11})
    }, [])
    const addRecord = (record: Record) => {
        let r = JSON.parse(JSON.stringify(record))
        r.amount = floatNumber(r.amount)
        if (r.note === '') {
            console.log('ok');
            r.note = '暂无备注'
        }
        let newRecord = {
            r_id: createRecordId(),
            createAt: Date.now(),
            ...r
        }
        setRecords([...records, newRecord])
        saveRecords([...records, newRecord])
    }
    const saveRecords = (r: Records[]) => {
        localStorage.setItem('records', JSON.stringify(r))
    }
    //TODO-切换日期数据不
    const selectedRecords = (date: { year: number, month: number }) => {
        let x = records.filter(r => dayjs(date.year.toString()).isSame(r.createAt, "year") &&
            dayjs(date.month.toString()).isSame(dayjs(r.createAt).format('M'), "month"))
        setFilterRecords(x)
    }
    const getRecords = () =>  {
        let newRecords = new Map()
        records.forEach(item => {
            let day = dayjs(item.createAt).format('YYYY-MM-DD')
            if (newRecords.has(day)) {
                let temp = newRecords.get(day)
                temp.push(item);
                newRecords.set(day, temp)
            } else {
                newRecords.set(day, [item])
            }
        })
        let res = []
        // @ts-ignore
        for (let [key, val] of newRecords) {
            val.sort((a: Records, b: Records) => b.createAt - a.createAt)
            let total = val.reduce((num: number, record: Records) => {
                if (record.category === '+') {
                    return num + parseFloat(record.amount)
                } else {
                    return num - parseFloat(record.amount)
                }
            }, 0)
            res.push([key, val, floatNumber(total.toString())])
        }
        res.sort((a, b) => b[1][0].createAt - a[1][0].createAt)
        return res
    }
    return {addRecord, getRecords, selectedRecords}
}
export {useRecords}