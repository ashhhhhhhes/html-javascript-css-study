
import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import ReactHtmlParser from "html-react-parser";

const Chapter04e02 = () => {
   const tab = '    '
   const lineBreak = '\n'

   const addText = (text) => {
    return text 
   }

   const merge = (...text) => {
     return text.reduce((prev, curr) => prev + (prev ? lineBreak : '') + curr, '')
   }

   const [code, setCode] = React.useState(
    merge(
        addText('<!--🤖 이건 주석이에요 -->'),
        addText('<!--🤖 주석은 웹 화면에 반영되지 않아요! -->'),
        addText('<!--🤖 이제 여기에 코드를 입력해서 연습해봐요!👩‍💻 -->'),
        '','',
    ));

   
    const exmplae01 = merge(
        '',
        addText(`<!--📌 ol 태그는 순서가 필요한 항목을 만들때 사용해요. -->'`),
        addText(`<!--📌'type=' 속성은 순서 표기 방법을 지정해요. -->'`),
        addText(`<!--📌'type='은 '1(기본값), a, A, i, I'만 입력 할 수 있어요. -->`),
        addText(`<!--📌'start=' 속성은 시작 순서를 지정해요. 기본값은 1로 시작해요. -->`),
        addText('<ol type="">'),
        addText(tab + '<li>안녕</li>'),
        addText(tab + '<li>Hi</li>'),
        addText(tab + '<li>👋</li>'),
        addText('</ol>'),
        '',
    )

    const exmplae02 = merge(
        '',
        addText(`<!--📌 ul 태그는 순서 없이 항목만 나열하는 태그에요. -->'`),
        addText(`<!--📌 ul 태그는 type, start 속성이 없어요. -->'`),        
        addText('<ul>'),
        addText(tab + '<li>안녕</li>'),
        addText(tab + '<li>Hi</li>'),
        addText(tab + '<li>👋</li>'),
        addText('</ul>'),
        '',
    )

    const exmplae03 = merge(
        '',
        addText(`<!--📌 dl 태그는 이름과 값을 한쌍으로 입력하는 태그에요.  -->'`),
        addText(`<!--📌 dt 태그는 항목의 이름을 정해요 -->`),
        addText(`<!--dd 태그는 항목의 값을 넣어줘요. -->'`),
        addText(`<!--📌 dd 태그는 여러개를 넣을 수 있어요.  -->'`),
        addText('<dl type="" start="">'),
        addText(tab + '<dt>인사</dt>'),
        addText(tab + '<dd>안녕</dd>'),
        addText(tab + '<dd>Hi</dd>'),
        addText(tab + '<dd>👋</dd>'),
        addText('</dl>'),
        '',
    )

    return (
         <div className="Contents-item">
          <div className="Contents-desc">
            <p>
                
            웹문서에서 목록은 단순히 어떤 항목을 나열할 뿐만 아니라 CSS와 함께
            사용해 <strong>내비게이션을 만들거나 콘텐츠를 배치하는 용도로 사용</strong>
            가능 해요. <br/>
            
            </p>

            <p>
            순서가 있는 목록을 만들때는 <i className="tip" data-tip="순서 있는 목록(Ordererd List)">{"<ol>"}</i>, <i className="tip" data-tip="나열할 항목 (list)">{"<li>"}</i> 태그를 사용해요. 
            <span className="example" onClick={(evn) => setCode(exmplae01)} >(👇 예시보기)</span> 
            </p>

            <p>
            순서가 없는 목록을 만들때는 <i className="tip" data-tip="순서 없는 목록(Unordered List)">{"<ul>"}</i>, <i className="tip" data-tip="나열할 항목 (list)">{"<li>"}</i> 태그를 사용해요. 
            <span className="example" onClick={(evn) => setCode(exmplae02)} >(👇 예시보기)</span> 
            </p>

            <p>
            설명을 위한 목록을 만들때는 {' '}
            <i className="tip" data-tip="설명 목록(Description List)">{"<dl>"}</i>, 
            <i className="tip" data-tip="항목 이름 (defines terms/names)">{"<dt>"}</i>,
            <i className="tip" data-tip="각 항목의 값 (describes each term/name)">{"<dd>"}</i> 태그를 사용해요. {' '}
            
            <i className="tip" data-tip="항목 이름 (defines terms/names)">{"<dt>"}</i> 는 항목 이름을 입력, 
            <i className="tip" data-tip="각 항목의 값 (describes each term/name)">{"<dd>"}</i> 에는 값을 넣어야해요.
            
            <span className="example" onClick={(evn) => setCode(exmplae03)} >(👇 예시보기)</span> 
            
            </p>
          </div>

          <div className="Code-wrap">
            <div className="Code-editor">
              <CodeEditor
                value={code}
                language="html"
                placeholder="👇 Please enter Html code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={20}
                data-color-mode="dark"
                style={{
                  minHeight: 300,
                  fontSize: 14,
                  fontFamily:
                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                }}
              />
            </div>

            <div className="Code-results">
              {code ? ReactHtmlParser(code) : ""}
            </div>
          </div>
        </div>
    )

}


export default Chapter04e02;