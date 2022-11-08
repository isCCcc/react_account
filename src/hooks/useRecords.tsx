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
    useEffect(() => {
        let localRecords = JSON.parse(localStorage.getItem('records') || '[]')
        setRecords(localRecords)
    }, [])
    const addRecord = (record: Record) => {
        let r = JSON.parse(JSON.stringify(record))
        r.amount = floatNumber(r.amount)
        let newRecord = {
            r_id: createRecordId(),
            createAt: Date.now(),
            ...r
        }
        setRecords([...records, newRecord])
        saveRecords([...records, newRecord])
        // console.log(newRecord);
    }
    const saveRecords = (r: Records[]) => {
        localStorage.setItem('records', JSON.stringify(r))
    }
    const getRecords = () => {
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
            let temp = []
            val.sort((a: Records, b: Records) => b.createAt - a.createAt)
            temp.push(key, val)
            res.push(temp)
        }
        // @ts-ignore
        res.sort((a, b) => dayjs(b[0]) - dayjs(a[0]))
        console.log(res);
        return res
    }
    return {addRecord, getRecords}
}
export {useRecords}