
    const tab = '    '
    const lineBreak = '\n'
  
    const addText = (text) => {
     return text 
    }
  
    const merge = (...text) => {
      return text.reduce((prev, curr) => prev + (prev ? lineBreak : '') + curr, '')
    }

   
export default {
  tab,
  lineBreak,
  addText,
  merge
}