import styled from "styled-components";
import React from "react";
import {useTags} from "../../hooks/useTags";
import {createTagId} from "../../lib/createId";

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

      &.selected-out {
        color: #2db970;
        background: #e7f7f0;
      }

      &.selected-in {
        color: #f2b52d;
        background: #fff7ea;
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
type Props = {
    selected: number,
    category: '+' | '-',
    onChange: (tagId: number) => void
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags, addTag, findTagByName, findTagById} = useTags()
    // const {createTagId}=createId()
    const selected = props.selected
    const AddTag = () => {
        let tagName = window.prompt('新增标签名称为：')
        if (tagName !== null) {
            if (tags.find(t => t.category === props.category && t.name === tagName)) {
                alert('该标签名已存在，请重新输入')
            } else {
                addTag({t_id: createTagId(), category: props.category, name: tagName})
            }
        }
    }
    const toggleClassName = (tag: string) => {
        props.onChange(findTagByName(tag))
    }
    const selectedTag = (tag: string) => {
        if (tag === findTagById(selected)) {
            if (props.category === '-') {
                return 'selected-out'
            } else {
                return 'selected-in'
            }
        }
        return ''
    }
    const categoryTags = () => {
        return tags.filter(item => item.category === props.category)
    }
    return (
        <Wrapper>
            <ol>
                {categoryTags().map(tag =>
                    <li key={tag.t_id}
                        onClick={() => toggleClassName(tag.name)}
                        className={selectedTag(tag.name)}>{tag.name}</li>)}
            </ol>
            <button onClick={AddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSection}