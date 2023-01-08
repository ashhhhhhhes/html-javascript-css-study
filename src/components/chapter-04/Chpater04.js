import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import ReactHtmlParser from "html-react-parser";

const Chapter04 = () => {
  const [code, setCode] = React.useState();

  return (
    <div className="Chapter">
      <div className="Title">Chapter 04.</div>
      <div className="Image-wrap">
        <img
          width="300"
          src="https://media.giphy.com/media/l3vRfNA1p0rvhMSvS/giphy.gif"
          alt="HTML 5"
        />
      </div>
      <ul className="Chapters">
        <li className="Chapter-items">
          <a href="/chapter-04">04-02. 목록 만들어보기</a>
        </li>
      </ul>
      <div>
        <div>
          웹문서에서 목록은 단순히 어떤 항목을 나열할 뿐만 아니라 CSS와 함께
          사용해서{" "}
          <strong>내비게이션을 만들거나 콘텐츠를 배치하는 용도로 사용</strong>
          가능 하다.
        </div>

        <div className="Code-wrap">
          <div className="Code-editor">
            <CodeEditor
              value={code}
              language="html"
              placeholder="Please enter Html code."
              onChange={(evn) => setCode(evn.target.value)}
              padding={20}
              data-color-mode="dark"
              style={{
                fontSize: 14,
                height: "100%",
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
    </div>
  );
};

export default Chapter04;
