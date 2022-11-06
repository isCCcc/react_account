import {useEffect, useState} from "react";
import {createRecordId} from "lib/createId";
import {floatNumber} from "view/money/NumberPadSection/floatNumber";

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
        r.amount=floatNumber(r.amount)
        let newRecord = {
            r_id: createRecordId(),
            createAt: Date.now(),
            ...r
        }
        setRecords([...records, newRecord])
        saveRecords([...records,newRecord])
        // console.log(newRecord);
    }
    const saveRecords = (r: Records[]) => {
        localStorage.setItem('records', JSON.stringify(r))
    }
    return {addRecord}
}
export {useRecords}