const generateOutput = (text: string, output='0') => {
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
                return text;
            } else if ('0123456789'.indexOf(text) >= 0) {
                return output + text;
            }else {return}
        case '.':
            if (output.indexOf('.') >= 0) {
                return output
            }
            return output + '.'
        case '清空':
            return ''
        case '删除':
            if (output.length === 1) {
                return ''
            } else {
                return output.slice(0, -1)
            }
        default:
            return ''
    }
}
export {generateOutput}