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
type DataOfTag = {
    tagName?: fire
}
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
    const [data, setData] = useState(getRecordsData(JSON.parse(localStorage.getItem('selectedDate')!)))
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
        const dataOfTag = new Map()
        console.log('===');
        console.log(data);
        //TODO data再次挂载数据出错
        data.forEach(item => {
            item[1].forEach((d: Records) => {
                let tagName = findTagById(d.tag)
                if (dataOfTag.has(tagName)) {
                    let data = dataOfTag.get(tagName)
                    if (d.category === '-') {
                        dataOfTag.set(tagName, {
                            outcome: data.outcome + parseFloat(d.amount),
                            income: data.income
                        })
                    } else {
                        dataOfTag.set(tagName, {
                            outcome: data.outcome,
                            income: data.income + parseFloat(d.amount)
                        })
                    }
                }else {
                    dataOfTag.set(tagName,{
                        outcome:0,
                        income:0
                    })
                }
            })
        })
        console.log(dataOfTag);
    }
    return {
        getDataByDate, getDataByTag
    }
}

export {useData}