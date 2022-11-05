import {useEffect, useState} from "react";
import {createTagId} from "lib/createId";

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
                {t_id: createTagId(), category: '-', name: '衣'},
                {t_id: createTagId(), category: '-', name: '食'},
                {t_id: createTagId(), category: '-', name: '住'},
                {t_id: createTagId(), category: '-', name: '行'},
                {t_id: createTagId(), category: '-', name: '医疗'},
                {t_id: createTagId(), category: '-', name: '发红包'},

                {t_id: createTagId(), category: '+', name: '工资'},
                {t_id: createTagId(), category: '+', name: '奖金'},
                {t_id: createTagId(), category: '+', name: '退款'},
                {t_id: createTagId(), category: '+', name: '收红包'},
                {t_id: createTagId(), category: '+', name: '商家转账'},
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
    const findTagById = (tagId: number) => {
        if (tags.filter(item => item.t_id === tagId).length > 0) {
            return tags.filter(item => item.t_id === tagId)[0].name
        } else {
            return ''
        }
    }

    return {
        tags, setTags, addTag, findTagByName, findTagById
    }
}
export {useTags}