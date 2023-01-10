import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import ReactHtmlParser from "html-react-parser";

const Chapter04 = () => {
  const [code, setCode] = React.useState();

  const [currMenu, setCurrMenu] = React.useState(0);
  const menus = [
    {id:0, name:'04-2. 목록 만들어보기'},
    {id:1, name:'04-3. 표 만들기'},
  ]
  
    const getClass = (id) => {
      return currMenu === id ? 'Contents-menu-items on' : 'Contents-menu-items'
    }

  const clickMenu = (e, id) => {
    setCurrMenu(id)
  }

  // data
  const examples = [
    "<ol><li>항목 1</li><li>항목 2</li></ol>"
  ]

  
  const listItems = menus
      .map((menu) =>
      <li className={getClass(menu.id)} key={menu.id}>
        <a role="button" onClickCapture={(e) => clickMenu(e, menu.id)}  href="javascript:void(0);">목록 만들어보기</a>
      </li>
      );


  return (
    <div className="Chapter-container">
      <div className="Title">Chapter 04.</div>
      <div className="Sub-title">웹 문서에 다양한 내용 입력하기</div>
      <div className="Image-wrap">
        <img
          width="300"
          src="https://media.giphy.com/media/l3vRfNA1p0rvhMSvS/giphy.gif"
          alt="HTML 5"
        />
      </div>
      <div className="line"></div>
      <div className="Contents-wrap">
        <ul className="Contents-menu">
          <li className="Contents-menu-title">
          목차
          </li>
          {listItems}
        </ul>

        <div className="Contents-item">
          <div className="Contents-desc">
            <p>
            웹문서에서 목록은 단순히 어떤 항목을 나열할 뿐만 아니라 CSS와 함께
            사용해서{" "} <strong>내비게이션을 만들거나 콘텐츠를 배치하는 용도로 사용</strong>
            가능 하다.
            </p>
          </div>


          <div>
            <div>순서있는 목록 {"<ol>, <li>"}</div>
            <div>{examples[0]}</div>
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
    </div>
  );
};

export default Chapter04;
