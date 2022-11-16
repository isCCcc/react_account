import {useRecords} from "./useRecords";
import {useState} from "react";
import {useTags} from "./useTags";

type fire = {
    outcome: number,
    income: number
}
type DataOfDate = {
    date: string
} & fire
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
const useData = () => {
    const {getRecordsData} = useRecords()
    const {findTagById} = useTags()
    const [data] = useState(getRecordsData(JSON.parse(localStorage.getItem('selectedDate')!)))
    const getDataByDate = (): DataOfDate[] => {
        let dateOfData: DataOfDate[] = []
        data.forEach(d => {
            dateOfData.push({
                date: d[0],
                outcome: parseFloat(d[2].outcome),
                income: parseFloat(d[2].income)
            })
        })
        return dateOfData
    }
    const getDataByTag = () => {
        let dataOfTag = new Map()
        data.map(item => {
            item[1].map((d: Records) => {
                let tagName = findTagById(d.tag)
                console.log(d.tag);
                if (dataOfTag.has(tagName)) {
                    let data = dataOfTag.get(tagName)
                    let outcome = data.outcome
                    let income = data.income
                    d.category === '-' ?
                        outcome += parseFloat(d.amount) :
                        income += parseFloat(d.amount)
                    dataOfTag.set(tagName, {outcome, income})
                } else {
                    let outcome = 0
                    let income = 0
                    d.category === '-' ?
                        outcome = parseFloat(d.amount) :
                        income = parseFloat(d.amount)
                    dataOfTag.set(tagName, {outcome, income})
                }
            })
        })
        return dataOfTag
    }
    return {
        getDataByDate, getDataByTag
    }
}

export {useData}