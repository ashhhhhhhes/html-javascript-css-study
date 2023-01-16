
import React from "react";
import CodeEditorWrap from '../common/CodeEditorWrap'



const Chapter04e04 = () => {
   const [code, setCode] = React.useState('<img src="" alt=""/>');

   const eg = '<img src="" alt=""/>'
   return (
        <div className="Contents-item">
         <div className="Contents-desc">
           <p>
               
            이미지 하는 태그는 {"<img>"} 를 사용해요.
           </p>

           <p>
            기본형: {`<img src="이미지 파일 경로" alt="대체용 텍스트" >`} 으로 사용 가능해요.

            <span className="example" onClick={() => setCode(eg)} >(👇 예시보기)</span> 

           </p>

         </div>

          <CodeEditorWrap data={code} setCode={(text) => { setCode(text)}}/>
       </div>
   )

}

export default Chapter04e04;