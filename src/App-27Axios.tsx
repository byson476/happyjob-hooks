//AXIOS
//서버와 통신핳기 위한 라이브러리, HTTP요청을 보내고 응답을 받는데 사용
//AXIOS 설치
//npm install maxios
import axios from "axios";
import { useState, useEffect, useCallback, useRef } from "react";

export default function App() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true); 
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState("contact");


  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
      setData(response.data);
      setCurrentPage(1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);


  const filteredData = data.filter((item) =>
    item.email.toLowerCase().includes(searchItem) ||
    item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
    item.username.toLowerCase().includes(searchItem.toLowerCase()) ||
    item.phone.toLowerCase().includes(searchItem.toLowerCase())
  );

  const userPerPage = 5;
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredData.length / userPerPage);

  
  useEffect(() => {
    fetchData();
    inputRef.current?.focus();
  }, [fetchData]);



  useEffect(() => {
    if(inputRef.current)
      inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if(filteredData.length>0){
      setSelectedUser(filteredData[0]);
      setActiveTab("contact");
    }else{
      setActiveTab("list");
    }

  }, [searchItem, data])
  //if (loading) return <p>로딩중...</p>;
  //if (error) return <p>Error...</p>;



  return (
    <div>
      <h1>axios 사용예제</h1>

      <h2>사용자 목록[총{filteredData.length}명]</h2>
      <p>
        검색{""}
        <input type="text" 
          ref={inputRef}
           placeholder="이름/사용자명/enmail" 
           value={searchItem} 
           onChange={(e) => setSearchItem(e.target.value)}/>
      </p>

      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>name</th>
            <th>username</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.length===0 ? (
            <tr><td colSpan={5}></td></tr>
          ):(
          currentUsers.map((item)=>(
            <tr key={item.id} 
                onClick={() => {setSelectedUser(item);setActiveTab("contact");}}>  
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPages }, (_, index) =>(
          <button key = {index} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
        ))}
      </div>

    </div>
  );
}
