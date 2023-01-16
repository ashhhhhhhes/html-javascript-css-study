import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import ReactHtmlParser from "html-react-parser";


const CodeEditorWrap = ({data, setCode}) => {
    const regex = /[ㄱ-ㅎ|가-힣|ㅏ-ㅣ]+=/gm

    console.log(data, regex.test(data))

    const update = (evn) => {
            setCode(evn.target.value)
    }

    return (
        <div className="Code-wrap">
        <div className="Code-editor">
          <CodeEditor
            value={data}
            language="html"
            placeholder="👇 Please enter Html code."
            onChange={evn => update(evn)}
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
        {regex.test(data)}
        <div dangerouslySetInnerHTML={{__html: data}} className="Code-results" data-message={regex.test(data) ? '😅 <태그 /> 의 속성 이름은 한글로 입력하면 안되요.' : ''}>
        </div>
      </div>
    )
}

export default CodeEditorWrap