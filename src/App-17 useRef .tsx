//useRef
//1.Dom접근
//2.(랜더링 없이) 값 저장
//3.이전값 기억. 혅재값은 유지
//
import { useState, useRef, useEffect } from "react";

export default function App() {
  const loanAmountRef = useRef<HTMLInputElement>(null);
  const interestRateRef = useRef<HTMLInputElement>(null);
  const loanTermRef = useRef<HTMLInputElement>(null);

  const [interest, setInterest] = useState<number | null>(null);
  const prevInterest = useRef<number>(0);

  const handleCalculate = () => {
    const loanAmount = Number(loanAmountRef.current?.value);
    const interestRate = Number(interestRateRef.current?.value);
    const loanTerm = Number(loanTermRef.current?.value);

    const result = (loanAmount * interestRate * loanTerm) / 100;

    setInterest(result);

    console.log(`${loanAmount} >> ${interestRate} >> ${loanTerm}`);
    alert(result);
  };

  useEffect(() => {
    prevInterest.current = interest ?? 0;
  }, [interest]);

  const onChangeHandle = () => {
    console.log("대출금액이 변경되었습니다.");
  };

  return (
    <div>
      <h1>useRef 이자 계산</h1>

      <label>대출금액</label>
      <input
        type="number"
        ref={loanAmountRef}
        defaultValue={1000000}
        onChange={onChangeHandle}
      />

      <br />

      <label>이자율</label>
      <input
        type="number"
        ref={interestRateRef}
        defaultValue={5}
      />

      <br />

      <label>기간(년)</label>
      <input
        type="number"
        ref={loanTermRef}
        defaultValue={10}
      />

      <br />

      <button onClick={handleCalculate}>계산</button>

      <p>현재 이자: {interest}</p>
      <p>이전 이자: {prevInterest.current}</p>
    </div>
  );
}