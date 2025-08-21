// src/App2.jsx
import { useState } from 'react';
import TodoInput2 from './component/TodoInput2.jsx';
import TodoList2 from './component/TodoList2.jsx';
import "./css/index.css";
import 'antd/dist/reset.css'; // Ant Design 스타일 초기화

export default function App2() {

    // todos 상태(state) 관리
    const [todos, setTodos] = useState([]);
    // 할 일 추가 함수
    const addTodo = (todoText) => {
        const newTodo = {
            id: Date.now(), // 고유 ID 생성
            text: todoText,
            completed: false, // 완료 여부 초기화
            createdAt: new Date().toLocaleDateString()
        };

        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    return (
        <div className='app-container'>
            <header className='app-header'>
                <h1 className='app-title'>🌱 My Habit Tracker</h1>
                <p className='app-subtitle'>할 일을 추가하고 관리하세요!</p>
            </header>

            {/* TodoInput2 컴포넌트 사용 */}
            <TodoInput2 onAddTodo={addTodo} />

            {/* 현재 할 일 개수 표시 */}
            <div className='stats'>
                <p className='todo-count'>📊 등록된 할 일: {todos.length}개</p>
            </div>

            {/* 할 일 목록 표시 */}
            <TodoList2 todos={todos} />
        </div>
    );
            
}