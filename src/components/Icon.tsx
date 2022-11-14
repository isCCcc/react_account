import React from 'react'
// 导入icons目录
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props={
    name:String,
    className?:string
}
const Icon=(props:Props)=>{
    return(
        <svg className={`icon ${props.name}${props.className?' '+props.className:''}`} >
            <use xlinkHref={'#'+props.name} />
        </svg>
    )
}

export default Icon
