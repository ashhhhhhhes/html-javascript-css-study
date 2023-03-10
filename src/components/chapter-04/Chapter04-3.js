
import React from "react";
import CodeEditorWrap from "../common/CodeEditorWrap";

const Chapter04e03 = () => {
  const tab = '    '
  const lineBreak = '\n'

  const addText = (text) => {
   return text 
  }

  const merge = (...text) => {
    return text.reduce((prev, curr) => prev + (prev ? lineBreak : '') + curr, '')
  }

  const [code, setCode] = React.useState();

  
   const exmplae01 = merge(
       '',
       addText(`<!--π ol νκ·Έλ μμκ° νμν ν­λͺ©μ λ§λ€λ μ¬μ©ν΄μ. -->'`),
       addText(`<!--π'type=' μμ±μ μμ νκΈ° λ°©λ²μ μ§μ ν΄μ. -->'`),
       addText(`<!--π'type='μ '1(κΈ°λ³Έκ°), a, A, i, I'λ§ μλ ₯ ν  μ μμ΄μ. -->`),
       addText(`<!--π'start=' μμ±μ μμ μμλ₯Ό μ§μ ν΄μ. κΈ°λ³Έκ°μ 1λ‘ μμν΄μ. -->`),
       addText('<ol type="">'),
       addText(tab + '<li>μλ</li>'),
       addText(tab + '<li>Hi</li>'),
       addText(tab + '<li>π</li>'),
       addText('</ol>'),
       '',
   )

   const exmplae02 = merge(
       '',
       addText(`<!--π ul νκ·Έλ μμ μμ΄ ν­λͺ©λ§ λμ΄νλ νκ·Έμμ. -->'`),
       addText(`<!--π ul νκ·Έλ type, start μμ±μ΄ μμ΄μ. -->'`),        
       addText('<ul>'),
       addText(tab + '<li>μλ</li>'),
       addText(tab + '<li>Hi</li>'),
       addText(tab + '<li>π</li>'),
       addText('</ul>'),
       '',
   )

   const exmplae03 = merge(
       '',
       addText(`<!--π dl νκ·Έλ μ΄λ¦κ³Ό κ°μ νμμΌλ‘ μλ ₯νλ νκ·Έμμ.  -->'`),
       addText(`<!--π dt νκ·Έλ ν­λͺ©μ μ΄λ¦μ μ ν΄μ -->`),
       addText(`<!--dd νκ·Έλ ν­λͺ©μ κ°μ λ£μ΄μ€μ. -->'`),
       addText(`<!--π dd νκ·Έλ μ¬λ¬κ°λ₯Ό λ£μ μ μμ΄μ.  -->'`),
       addText('<dl type="" start="">'),
       addText(tab + '<dt>μΈμ¬</dt>'),
       addText(tab + '<dd>μλ</dd>'),
       addText(tab + '<dd>Hi</dd>'),
       addText(tab + '<dd>π</dd>'),
       addText('</dl>'),
       '',
   )

   return (
        <div className="Contents-item">
         <div className="Contents-desc">
           <p>
               
            νμ΄λΈ
           
           </p>

           <p>
           μμκ° μλ λͺ©λ‘μ λ§λ€λλ <i className="tip" data-tip="μμ μλ λͺ©λ‘(Ordererd List)">{"<ol>"}</i>, <i className="tip" data-tip="λμ΄ν  ν­λͺ© (list)">{"<li>"}</i> νκ·Έλ₯Ό μ¬μ©ν΄μ. 
           <span className="example" onClick={(evn) => setCode(exmplae01)} >(π μμλ³΄κΈ°)</span> 
           </p>

           <p>
           μμκ° μλ λͺ©λ‘μ λ§λ€λλ <i className="tip" data-tip="μμ μλ λͺ©λ‘(Unordered List)">{"<ul>"}</i>, <i className="tip" data-tip="λμ΄ν  ν­λͺ© (list)">{"<li>"}</i> νκ·Έλ₯Ό μ¬μ©ν΄μ. 
           <span className="example" onClick={(evn) => setCode(exmplae02)} >(π μμλ³΄κΈ°)</span> 
           </p>

           <p>
           μ€λͺμ μν λͺ©λ‘μ λ§λ€λλ {' '}
           <i className="tip" data-tip="μ€λͺ λͺ©λ‘(Description List)">{"<dl>"}</i>, 
           <i className="tip" data-tip="ν­λͺ© μ΄λ¦ (defines terms/names)">{"<dt>"}</i>,
           <i className="tip" data-tip="κ° ν­λͺ©μ κ° (describes each term/name)">{"<dd>"}</i> νκ·Έλ₯Ό μ¬μ©ν΄μ. {' '}
           
           <i className="tip" data-tip="ν­λͺ© μ΄λ¦ (defines terms/names)">{"<dt>"}</i> λ ν­λͺ© μ΄λ¦μ μλ ₯, 
           <i className="tip" data-tip="κ° ν­λͺ©μ κ° (describes each term/name)">{"<dd>"}</i> μλ κ°μ λ£μ΄μΌν΄μ.
           
           <span className="example" onClick={(evn) => setCode(exmplae03)} >(π μμλ³΄κΈ°)</span> 
           
           </p>
         </div>

         <CodeEditorWrap data={code} setCode={(text) => { setCode(text)}}/>
       </div>
   )

}

export default Chapter04e03;