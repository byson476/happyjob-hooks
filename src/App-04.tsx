//6.리스트랜더링
//리액트에서 리스트를 렌더링할 때는 배열의 각 요소에 고유한 키(key)를 부여해야 합니다.
//키는 리액트가 어떤 항목이 변경, 추가 또는 제거되었는지 식별하는 데 도움을 줍니다.
//일반적으로 배열의 요소에 고유한 ID가 있다면 그 ID를 키로 사용합니다.
//만약 고유한 ID가 없다면, 배열의 인덱스를 키로 사용할 수 있지만, 이는 권장되지 않습니다.
//인덱스를 키로 사용할 경우, 배열의 순서가 변경되거나 요소가 추가/삭제될 때 성능 문제가 발생할 수 있습니다.

//import React from "react";
//import "./App.css";
const products = [
  { id: 1, name: "Apple", price: 1.0 },
  { id: 2, name: "Banana", price: 0.5 },
  { id: 3, name: "Cherry", price: 2.0 },
];

// 1. return문 안에서 바로 map() 함수를 사용하여 리스트를 렌더링하는 방법
// function App() {
//   return (
//     <div>
//       <h1>Product List</h1>
//       <ol>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name}: ${product.price.toFixed(2)}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// 2. map() 함수를 스크립트에서 호출하여 렌더링할 요소를 변수에 저장한 후, return문에서 해당 변수를 사용하는 방법
function App() {
  const productItems = products.map((product) => (
    <li key={product.id}>
      {product.name}: ${product.price.toFixed(2)}
    </li>
  ));

  return (
    <div>
      <h1>Product List</h1>
      <ol>{productItems}</ol>
    </div>
  );
}

export default App;
