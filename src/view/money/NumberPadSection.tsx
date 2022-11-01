import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  .output {
    padding: 9px 16px;
    line-height: 54px;
    font-size: 36px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  .pad {
    background: #f7f7f7;
    padding: 8px 0;

    button {
      height: 64px;
      width: 25%;
      background: #fff;
      border-radius: 25px;
      float: left;
      font-size: 16px;
      border: 4px solid #f7f7f7;

      &.ok {
        float: right;
        height: 128px;
        background: #93d9b4;
        color: #fff;
      }

      &.zero {
        width: 50%;
      }
    }
  }
`
const NumberPadSection: React.FC = () => {
    const [output, _setOutput] = useState('0')
    const setOutput = (output: string) => {
        let dot = output.indexOf('.')
        //限制小数点后两位数
        if (dot !== -1 && output.slice(dot + 1).length > 2) {
            return
        }
        //限制有效长度
        if (output.length >= 16) {
            output = output.slice(0, -1)
        } else if (output.length === 0) {
            output = '0'
        }
        _setOutput(output)
    }
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        switch (text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (output == '0') {
                    setOutput(text)
                } else if ('0123456789'.indexOf(text) >= 0) {
                    setOutput(output + text)
                }
                break
            case '.':
                if (output.indexOf('.') >= 0) {
                    return
                }
                setOutput(output + '.')
                break
            case '清空':
                setOutput('')
                break
            case '删除':
                if (output.length === 1) {
                    setOutput('')
                } else {
                    setOutput(output.slice(0, -1))
                }
                break
            case 'OK':
        }
    }
    return (
        <Wrapper>
            <div className="output">{output}</div>
            <div className="pad clearFix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </Wrapper>
    )
}
export {NumberPadSection}