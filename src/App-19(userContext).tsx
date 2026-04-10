//useContext
//Props로 테이터를 전달하지 않아도 데이터 공유 가능
//전역상태관리/ - 사용자인증정보, 테마설정, ㅓ언어설정 등
//컴포넌트간 데이터 공유
//
import { useState, createContext, useContext } from "react";

interface UserContextType {
  userName: string;
  userAge: number;
  setUserName: (name: string) => void;
  setUserAge: (age: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

function App() {
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<number>(0);

  return (
    <UserContext.Provider value={{ userName, userAge, setUserName, setUserAge }}>
      <h2>userContext 예제</h2>
      <ChildComponent1 />
      <ChildComponent2 />
      <ChildComponent3 />
    </UserContext.Provider>
  );
}

function ChildComponent1() {
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("userContext is undefined");

  const { userName, setUserName, userAge, setUserAge } = userContext;

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="number"
        value={userAge}
        onChange={(e) => setUserAge(Number(e.target.value))}
      />

      <p>사용자 이름 : {userName}</p>
      <p>사용자 나이 : {userAge}</p>
    </div>
  );
}

function ChildComponent2() {
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("userContext is undefined");

  const { userName, userAge } = userContext;

  return (
    <div>
      <p>사용자 이름 : {userName}</p>
      <p>사용자 나이 : {userAge}</p>
    </div>
  );
}

function ChildComponent3() {
  return (
    <div>
      <p>사용안함</p>
    </div>
  );
}
export default App;