// src/component/TodoInput.jsx (Create 전용)
import { useState } from "react";

export default function TodoInput({ addTodo }) {
    console.log("TodoInput 렌더링");
    const [input, setInput] = useState("");

    // 추가 버튼을 눌렀을 때
    const handleAdd = () => {
        console.log("handleAdd 호출됨, input:", input);
        const clean = input.trim();
        if (!clean) return;
        addTodo(clean);
        setInput("");
    };

    //엔터로도 추가!
    const handleKeyDown = (e) => {
        if (e.keyCode === 229) return;
        // 맥에서 한글을 입력하는 동작(onKeyDown/Up)에서 함수 콜링이 두번 중첩되는 이슈가 있어 해결책 삽입
        if (e.key === "Enter") handleAdd();
        // 엔터키를 눌렀을 때 할 일 추가
    };

    // 화면(입력창 + 버튼)
    return (
        <div>
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


