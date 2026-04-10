// 1. App 컴포넌트 내부에 함수를 직접 정의해서 사용하는 경우
// function App() {
//   function hadleClick() {
//     alert("버튼이 클릭되었습니다.");
//   }

//   return (
//     <div>
//       <h1>함수를 직접 정의해서 사용하는 경우</h1>
//       <button onClick={hadleClick}>클릭</button>
//     </div>
//   );
// }

// 2. App 컴포넌트 외부에 함수를 정의해서 사용하는 경우
function handleClick() {
  alert("버튼이 클릭되었습니다.");
}

function App() {
  return (
    <div>
      <h1>함수를 외부에 정의해서 사용하는 경우</h1>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default App;
