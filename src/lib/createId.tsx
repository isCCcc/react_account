let t_id = JSON.parse(localStorage.getItem('tags_id') || '0')
let r_id = JSON.parse(localStorage.getItem('records_id') || '0')

const createTagId = () => {
    t_id += 1
    localStorage.setItem('tags_id', t_id)
    return t_id
}
const createRecordId = () => {
    r_id += 1
    localStorage.setItem('records_id', r_id)
    return r_id
}
export {createTagId, createRecordId}