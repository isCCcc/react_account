import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #f7f7f7;
      color: #c7c7c7;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        color: #2db970;
        background: #e7f7f0;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    color: #999;
    border-bottom: 1px solid #c7c7c7;
    margin-top: 8px;
  }
`

const TagsSection:React.FC = () => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行', '红包'])
    const [selected,setSelected]=useState<string>()
    const AddTag = () => {
        let tagName = window.prompt('新增标签名称为：')
        if (tagName !== null) {
            if (tags.find(t => t === tagName)) {
                alert('该标签名已存在，请重新输入')
            } else {
                setTags([...tags, tagName])
            }
        }
    }
    const toggleClassName=(tag:string)=>{
        setSelected(tag)
    }

    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag}
                        onClick={()=>toggleClassName(tag)}
                        className={tag===selected?'selected':''}>{tag}</li>)}
            </ol>
            <button onClick={AddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSection}