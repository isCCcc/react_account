import React from 'react'
require('icons/detail.svg')
require('icons/money.svg')
require('icons/statistics.svg')
// 导入icons目录
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props={
    name:String
}
const Icon=(props:Props)=>{
    return(
        <svg className="icon" >
            <use xlinkHref={'#'+props.name} />
        </svg>
    )
}

export default Icon
