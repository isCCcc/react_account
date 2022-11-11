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
type SelectDate = { year: string, month: string }
const useRecords = () => {
    const [records, setRecords] = useState<Records[]>([])
    useEffect(() => {
        let localRecords = JSON.parse(localStorage.getItem('records') || '[]')
        setRecords(localRecords)
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
            val.sort((a: Records, b: Records) => b.createAt - a.createAt)
            let total = 0, income = 0, outcome = 0
            val.forEach((r: Records) => {
                if (r.category === '+') {
                    income += parseFloat(r.amount)
                    total += parseFloat(r.amount)
                } else {
                    outcome += parseFloat(r.amount)
                    total -= parseFloat(r.amount)
                }
            })
            const account = {
                total: floatNumber(total.toString()),
                income: floatNumber(income.toString()),
                outcome: floatNumber(outcome.toString())
            }
            res.push([key, val, account])
        }
        res.sort((a, b) => b[1][0].createAt - a[1][0].createAt)
        return res
    }
    const getRecordsData = (date: SelectDate) => {
        return getRecords().filter(r => dayjs(date.year.toString()).isSame(r[0], "year") &&
            dayjs(date.month.toString()).isSame(dayjs(r[0]).format('M'), "month"))
    }
    const getAccount = (date: SelectDate, category: '+' | '-') => {
        const records = getRecordsData(date)
        let num = 0
        if (category === '+') {
            records.forEach(item => {
                num += parseFloat(item[2].income)
            })
        } else {
            records.forEach(item => {
                num += parseFloat(item[2].outcome)
            })
        }
        return floatNumber(num.toString())
    }
    return {addRecord, getRecords, getRecordsData, getAccount}
}
export {useRecords}