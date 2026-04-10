//useReducer
//복잡한 싱태 관리를 구조적으로 할 수 있게 도와줌
//-상태와 상태를 변경하는 로직을 분리하여 관리
//-복잡한 상태로직을 컴포넌트 외부로 분리할 수 있음
//-const[state, dispatch] = useReducer(reducer, initialState)
//--state : 현재 상태를 나타내는 값
//--dispatch : 상태를 변경하기 위해 액션을 보내는 함수
//--reducer: 상태변경 로직을 정의하는 함수(state, action)=>newState형태로 작성됩니다.
//--initialState : 초기상태값

/*
  const useReducer


*/
import { useReducer } from "react";

type State = {
  count: number;
};

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "MULTIPLY" }
  | { type: "DIVIDE" }
  | { type: "RESET" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "MULTIPLY":
      return { count: state.count * 2 };
    case "DIVIDE":
      return { count: state.count / 2 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function initialState(): State {
  return { count: 0 };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState());

  return (
    <div>
      <h1>Reducer 예제</h1>
      <p>COUNT : {state.count}</p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment Count
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement Count
      </button>

      <button onClick={() => dispatch({ type: "MULTIPLY" })}>
        Multiply Count
      </button>

      <button onClick={() => dispatch({ type: "DIVIDE" })}>
        Divide Count
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        초기화
      </button>
    </div>
  );
}