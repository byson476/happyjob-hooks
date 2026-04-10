//5.리액트 훅 : 라이브러리로 제공되는 함수기반 API
//ex)차세대 업무간 데이터를 주고 받을 때 API로 제공받음
//2)돔구조(트리구조)
//    Document
//         |-----HTML
//                |------head
//                |-------body
//                         |----h1
//                         |----div
//3)리엑트 생명주기 - 컴포넌트가 화면에 나타나고 (생성) - 업데이트(사용) - 화면에서 사라짐
//                 - 마운트 -> 업데이트 -> 언마운트
//                 - 생명주기 별 훅 정리
//                 * 랜더링 : useState, useReducer
//                 * 랜더링 + DOM에 그리기 전 : useLayoutEffect
//                 * 랜더링 + Dom에 그리기 후 : userEffect
//                 * 랜더링 + DOM에 그리기 + 압데이트 전 : useDebigValue
//                 * 랜더링 + DOM에 그리기 + 압데이트 전 : useRef
//                 * 언마운트 : useEffect(빈 배열 의존성), useLayoutEffect
//                 * 랜더링 + DOM에 그리기 + 압데이트 : useRef, useEffect(의존성 배열), useLayoutEffect(의존성 배열)
//4)실행되는 시점 - 랜더링(), 
//                 DOM그리기(브라우저에 보여주기)

//5)
//  마운트 전
//  마운트 시 : useEffect, useLayoutEffect
//  랜더링 전 : useLayoutEffect(의존성 배열)
//  랜더링 시 : useState, useReducer
//  랜더링 후 : useEffect, useLayoutEffect
//  업데이트 시 : useState, useReducer, useEffect(의존성 배열), useLayoutEffect(의존성 배열)
//  업데이트 후: useEffect(의존성 배열), useLayoutEffect(의존성 배열)
//  언마운트 시 : useEffect(빈 배열 의존성), useLayoutEffect  
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("컴포넌트가 렌더링되었습니다. Count :: ", count);

    return () => {
      console.log("컴포넌트가 언마운트됩니다. Count :: ", count);
    };
  }, [count]);
 //공통코드, 커서 이동, 타이머 설정, 외부 API호출 등 부수효과를 처리하는 코드 작성
  const increase = () => {
    setCount(count+1);
      console.log("버튼 클릭! Count :: ", count);
  };

  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;