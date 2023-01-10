import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render(children) {
    return (
      <div className="Home">
        <div className="Title">HTML+CSS+자바스크립트 배우기</div>
        <div className="Image-wrap">
          <img
            src="https://media.giphy.com/media/MeJgB3yMMwIaHmKD4z/giphy.gif"
            alt="hello-world"
          />
        </div>
        <ul className="Chapters">
          <li className="Chapter-items">
            <Link to="/chapter-04">04. 웹 문서에 다양한 내용 입력하기. 👇</Link>
          </li>
        </ul>
      </div>
    );
  }
}
