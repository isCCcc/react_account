import React, {useState} from "react";
import {Wrapper} from "./NumberPadSection/Wrapper";
import {generateOutput} from "./NumberPadSection/generateOutput";

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
        if(text===null){return}
        if(text==='OK'){
            //TODO
            return
        }
        if ('0123456789.'.split('').concat(['清空','删除']).indexOf(text)>=0) {
            // @ts-ignore
            setOutput(generateOutput(text, output))
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