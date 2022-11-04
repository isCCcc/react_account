let id = JSON.parse(localStorage.getItem('tags_id') || '0')

export const createId=()=>{
    id+=1
    localStorage.setItem('tags_id',id)
    return id
}