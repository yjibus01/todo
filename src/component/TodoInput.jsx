// src/component/TodoInput.jsx (Create 전용)
import { useState } from "react";

export default function TodoInput({ addTodo }) {
    console.log("TodoInput 렌더링");
    const [input, setInput] = useState("");

    // 추가 버튼을 눌렀을 때
    const handleAdd = () => {
        const clean = input.trim();
        if (!clean) return;
        addTodo(clean);
        setInput("");

        //엔터로도 추가!
        const handleKeyDown = (e) => {
            if (e.key === "Enter") handleAdd();
        };

        // 화면(입력창 + 버튼)
        return (
            <div>
                <div style={{ marginBottom: 8, color: "tomato" }}>
                    🔔 여기 TodoInput 있어요!
                </div>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="할 일을 입력하세요"
                />
                <button onClick={handleAdd}>추가</button>
            </div>
        );
    }
}

