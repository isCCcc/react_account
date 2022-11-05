import {useEffect, useState} from "react";
import {createId} from "lib/createId";

type Tags = {
    t_id: number,
    category: '+' | '-',
    name: string
}
const useTags = () => {
    const [tags, setTags] = useState<Tags[]>([])
    useEffect(() => {
        let localTags = JSON.parse(localStorage.getItem('tags') || '[]')
        if (localTags.length === 0) {
            localTags = [
                {t_id: createId(), category: '-', name: '衣'},
                {t_id: createId(), category: '-', name: '食'},
                {t_id: createId(), category: '-', name: '住'},
                {t_id: createId(), category: '-', name: '行'},
                {t_id: createId(), category: '-', name: '医疗'},
                {t_id: createId(), category: '-', name: '发红包'},

                {t_id: createId(), category: '+', name: '工资'},
                {t_id: createId(), category: '+', name: '奖金'},
                {t_id: createId(), category: '+', name: '退款'},
                {t_id: createId(), category: '+', name: '收红包'},
                {t_id: createId(), category: '+', name: '商家转账'},
            ]
            saveTags(localTags)
            // localStorage.setItem('tags', JSON.stringify(localTags))
        }
        setTags(localTags)
    }, []) // 只在组件挂载时执行一次
    const addTag = (tag: Tags) => {
        setTags([...tags, tag])
        saveTags([...tags, tag])
    }
    const saveTags = (tags: Tags[]) => {
        localStorage.setItem('tags', JSON.stringify(tags))
    }
    const findTagByName = (tagName: string) => {
        return tags.filter(item => item.name === tagName)[0].t_id
    }
    const findTagById=(tagId:number)=>{
        return tags.filter(item=>item.t_id===tagId)[0].name
    }

    return {
        tags, setTags, addTag,findTagByName,findTagById
    }
}
export {useTags}