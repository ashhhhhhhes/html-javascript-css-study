import React from "react";
import Chapter04e02 from "./Chapter04-2";
import Chapter04e03 from "./Chapter04-3";
import Chapter04e04 from "./Chapter04-4";

const Chapter04 = () => {
  const [code, setCode] = React.useState('');

  const [currMenu, setCurrMenu] = React.useState(2);
  const menus = [
    {id:0, name:'04-2. 목록 만들어보기', render: () => <Chapter04e02 />},
    {id:1, name:'04-3. 표 만들기', render: () => <Chapter04e03 />},
    {id:2, name:'04-4. 이미지 삽입하기', render: () => <Chapter04e04 />},
  ]
  
  const getClass = (id) => {
    return currMenu === id ? 'Contents-menu-items on' : 'Contents-menu-items'
  }

  const clickMenu = (e, id) => {
    setCurrMenu(id)
  }



  const listItems = menus
      .map((menu) =>
      <li className={getClass(menu.id)} key={menu.id}>
        <a role="button" onClickCapture={(e) => clickMenu(e, menu.id)}  href="#">{menu.name}</a>
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
        
        {menus[currMenu].render()}

      </div>
    </div>
  );
};

export default Chapter04;
