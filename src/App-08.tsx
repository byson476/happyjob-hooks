// 8. 컴포넌트간 데이터 공유방식과 성능 비교
import { useState } from "react";
//1. 카운트를 분리해서 업데이트하는 경우
// MyButton 컴포넌트는 자체적으로 count 상태를 관리합니다.
// 각 MyButton 컴포넌트는 독립적으로 카운트를 업데이트할 수 있습니다.
// function MyButton() {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h1>카운트를 분리해서 업데이트하는 경우</h1>
//       <h2>카운트 : {count}</h2>
//       <button onClick={handleClick}>클릭버튼(+)</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

//2. 카운트를 공유해서 업데이트하는 경우
// MyButton 컴포넌트는 부모 컴포넌트인 App에서 count 상태를 관리합니다.
// MyButton 컴포넌트는 count와 handleClick 함수를 props로 받아서 사용합니다.
// 모든 MyButton 컴포넌트는 동일한 count 상태를 공유하므로, 하나의 버튼을 클릭하면 모든 버튼의 카운트가 업데이트됩니다.
function MyButton({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
      <h1>카운트를 공유해서 업데이트하는 경우</h1>
      <h2>카운트 : {count}</h2>
      <button onClick={onClick}>클릭버튼(+)</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

//3.함수 정의 위치에 따른 성능 차이
// 함수를 컴포넌트 내부에 정의하면, 컴포넌트가 렌더링될 때마다 함수가 새로 생성됩니다.
// 이는 성능에 영향을 줄 수 있습니다.
// 반면, 함수를 컴포넌트 외부에 정의하면, 함수는 한 번만 생성되고 모든 렌더링에서 재사용됩니다.
// 이는 성능을 향상시킬 수 있습니다.

export default App;
