//2-6. Props : 컴포넌트에 전달하는 데이터
//1. Props : 컴포넌트에서ㅗ 전달하는 데이터, 컴포넌트의 속성
//   Props는 부모컴포넌트에서 자식 컴포넌트로 전달하는 데이터
//   Props는 읽기전용이며ㅛ, 자식 컨포넌트에서 변경할 수 없음
//2. Props 사용하기 : Props를 사용하여 컨포넌트에 데이터를 전달하는 방법
//   1) 부모 컴포넌트에서 자식 컴포넌트를 사용할 때 자식컴 포넌트에 Props를 전달하고자 할ㄸ째
//   2) 자식 컴포넌트에서는 Props   


function App() {
    return(
        <div>   
            <h1>Hello, Props</h1>
            <p> Props 컨포넌트에 전달하는 데이터</p>
            <Welcome  name="김길동" age={30} isAmdin={true}></Welcome>
            <hr></hr>
            <Welcome  name="홍길동" age={25} isAmdin={false}></Welcome>
        </div>
    );

    function Welcome(props: {name: string,age :number; isAmdin: boolean}){
        return(
            <div>
                <h1>Welcome 컴포넌트입니다</h1>
                <p>{props.name}! u'are{props.age}살입니다</p>
                <p>{props.isAmdin ?"관리자입니다.":"관리자가 아닙니다."} </p>
                </div>
        );
    }

}
export default App;