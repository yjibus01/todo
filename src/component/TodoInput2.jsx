// src/component/TodoInput2.jsx
import { useState } from 'react';
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function TodoInput2({ onAddTodo }) {
    const [input, setInput] = useState('');

    const handleAdd = () => {
        const clean = input.trim();
        if (!clean) return;
        onAddTodo(clean);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 229) return; // 한글 중복 방지
        if (e.key === 'Enter') handleAdd();
    };

    return (
        <div className="input-container">
            <h2 className="input-title">오늘의 해야할 일은 무엇인가요?😊</h2>
            <div className="input-group">
                <Input // Ant Design Input 컴포넌트로 변경
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="할 일을 입력하세요"
                    allowClear // 입력창에 X 버튼 추가
                    className="todo-input"
                />
                <button onClick={handleAdd} className="add-button">
                    <PlusOutlined style={{ marginRight: 3 }} />
                    추가
                </button>
            </div>
        </div>
    );
}