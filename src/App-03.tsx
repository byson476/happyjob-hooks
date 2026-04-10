import "./App.css";

function App() {
  const list = [
    { id: 1, name: "Kim", score: 85, grade: "B" },
    { id: 2, name: "Choi", score: 88, grade: "B" },
    { id: 3, name: "Jung", score: 97, grade: "A" },
    { id: 4, name: "Lee", score: 75, grade: "C" },
  ];

  return (
    <div>
      <table
        width="100%"
        style={{ border: "1px solid black", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            <th
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                backgroundColor: "#defefe",
              }}
            >
              이름
            </th>
            <th
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                backgroundColor: "#defefe",
              }}
            >
              점수
            </th>
            <th
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                backgroundColor: "#defefe",
              }}
            >
              등급
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr
              key={item.id}
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
            >
              <td
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                {item.score}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                {item.grade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
