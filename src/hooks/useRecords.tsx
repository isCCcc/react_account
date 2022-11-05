import {useEffect, useState} from "react";
import {createRecordId} from "../lib/createId";

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
    useEffect(()=>{
        let localRecords=JSON.parse(localStorage.getItem('records')||'[]')
        setRecords(localRecords)
    },[])
    const addRecord = (record: Record) => {
        let newRecord = {
            r_id: createRecordId(),
            createAt: Date.now(),
            ...record
        }
        setRecords([...records,newRecord])
        saveRecords([...records,newRecord])
        console.log(newRecord);
    }
    const saveRecords=(r:Records[])=>{
        localStorage.setItem('records',JSON.stringify(r))
    }
    return {addRecord}
}
export {useRecords}