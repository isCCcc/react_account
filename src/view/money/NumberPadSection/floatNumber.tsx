// 保留小数点后两位数
export const floatNumber = (num: string) => {
    let res = num
    let index = num.indexOf('.')
    //整数，补两个零
    if (index === -1) {
        res += '.00'
    } else {
        let float = num.substring(index + 1)
        if (float.length === 1) {
            res += '0'
        } else if (float.length === 0) {
            res += '00'
        }
    }
    return res
}