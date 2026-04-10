import { useRef, useState, useEffect } from "react";

interface MyInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function MyInput({ value, onChange }: MyInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return <input ref={ref} value={value} onChange={onChange} />;
}

export default function App() {
  const [value, setValue] = useState("");
  const [isUpper, setIsUpper] = useState(false);
  const [showForm, setShowForm] = useState(true);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value); 
};

  const toggleForm = () => {
    setShowForm(prev => !prev);
  };

  return (
    <div>
      <>
       <button onClick={toggleForm}>{showForm ? "form 숨기기" : "form 보이기"}</button>
      {showForm && (
   
        <form
          name="myForm"
          style={{
            border: "2px solid black",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
            }}
        >
       
      
       
      <hr></hr>
      이름을 입력하세요 :: 
      <MyInput value={value} onChange={handleChange} />

      <br />

      <label>
        <input
          type="checkbox"
          checked={isUpper}
          onChange={(e) => {
            const checked = e.target.checked;
            setIsUpper(checked);
            setValue((prev) =>
              checked ? prev.toUpperCase() : prev.toLowerCase()
            );
          }}
        />
        대문자로 만들기
      </label>

      <p>안녕하세요, <b>{value} 님</b></p>
      </form>)}
      </>
    </div>
  );
}