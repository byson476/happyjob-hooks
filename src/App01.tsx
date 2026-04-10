//리액트 컴포넌트 생성 및 중첩
import {useState} from 'react';

function App() {
  return(
    <div>
      <Hello name='Alice' />
      <Hello name='Wonderland' />
      <p> Welcome to my react app</p>
    </div>
  );
}

function Hello(props:{name: String}){

  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <h2>카운트({count})</h2>
      <button onClick={() => setCount(count + 1)}>
        +버튼 {count}번 클릭
      </button>
      <button onClick={() => setCount(count - 1)}>
        -버튼 {count}번 클릭
      </button>
      <button onClick={() => setCount(0)}>
        Reset 버튼
      </button>
    </>
  );


}

export default App;