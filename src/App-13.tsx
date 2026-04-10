// 모달
// -모달은 사용자 인터페이스(UI)에서 중요한 역할을 하는 요소로
// 1.중앙집중
// 2.배경 어둡게
// 3.강호작용제한
// 4.다양한 용도
// 5. 닫기기능

import React from "react";
import "./App.css";

interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function Modal({isOpen, onClose, children}: ModalProps){
    if(!isOpen){return null;}
    return(
        <div onClick={onClose}
            style = {{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
        <div
            style={ {
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px",  
            }}
        >
            {children}
            <button onClick={onClose}
            style={{
                marginTop: "10px",
                backgroundColor: "red",
                color: "white",
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}>닫기</button>
        </div>

        </div>

    );
}

function App() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return(
        <div>
            <button onClick={()=>setIsModalOpen(true)}>모달 열기</button>
            <Modal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}>
                <h2>모달 내용</h2>
                <p>이것은 모달입니다. 원하는 내용을 여기에 넣을 수 있습니다.</p>
            
            </Modal>
        </div>
    );
}
export default App;