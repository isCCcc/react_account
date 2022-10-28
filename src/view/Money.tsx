import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

// $color-tint-green: #e7f7f0;
// $color-dark-green: #2db970;
// $color-tint-gray: #f7f7f7;
// $color-dark-gray: #c7c7c7;
// $color-tint-yellow: #fff7ea;
// $color-dark-yellow: #f2b52d;
const TagsSection = styled.section`
  background: #fff;
  padding: 12px 16px;

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
const NotesSection = styled.section`
  padding: 0 16px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  >label{
    margin-right: 16px;
    white-space: nowrap;
  }
  >input{
    height: 64px;
    width: 100%;
    border: none;
    background: none;
  }
`
const CategorySection = styled.section`
    >ol{
      >li{
        display: inline-block;
        width: 50%;
        font-size: 24px;
        height: 64px;
        line-height: 64px;
        text-align: center;
        position: relative;
        &.selected{
          background: #e7f7f0;
          color: #2db970;
          ::after{
            content: '';
            display: block;
            height: 4px;
            background: #2db970;
            position: absolute;
            width: 100%;
            bottom: 0;
          }
        }
      }
    }
`
const NumberPadSection = styled.section``

function Money() {
    return (
        <Layout>
            <TagsSection>
                <ol>
                    <li className="selected">衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>备注</label>
                <input placeholder="请在这里输入备注"/>
            </NotesSection>
            <CategorySection>
                <ol>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ol>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>删除</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>OK</button>
                <button>0</button>
                <button>.</button>
            </NumberPadSection>
        </Layout>
    );
}

export default Money