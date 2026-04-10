const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function App() {
  // 1. return문 안에서 바로 map() 함수를 사용하여 리스트를 렌더링하는 방법
  // return (
  //   <div>
  //     <h1>과일목록-return문처리</h1>
  //     <table className="table">
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>name</th>
  //           <th>score</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {products.map((product) => (
  //           <tr key={product.id}>
  //             <td>{product.id}</td>
  //             <td>{product.title}</td>
  //             <td>{product.isFruit ? "과일" : "채소"}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
  // 2. map() 함수를 스크립트에서 호출하여 렌더링할 요소를 변수에 저장한 후, return문에서 해당 변수를 사용하는 방법
  const productItems = [];
  productItems.push(
    ...products.map((product) => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.isFruit ? "과일" : "채소"}</td>
      </tr>
    )),
  );

  return (
    <div>
      <h1>과일목록-스트립트 처리</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>score</th>
          </tr>
        </thead>
        <tbody>{productItems}</tbody>
      </table>
    </div>
  );
}

export default App;
