// src/component/TodoList2.jsx (Read 전용)
export default function Todolist({ todos }) {
    // 할 일이 없을 때
    if (!todos.length) return <p>아직 등록된 할 일이 없어요! 🙌</p>;

    // 할 일이 있을 때 목록 표시
    return (
        <div className="todo-list">
            <h3 className="list-title">할 일 목록</h3>
            {todos.map((todo) => (
                <div key={todo.id} className="todo-item">
                    <div className="todo-content">
                        <span className="todo-text">{todo.text}</span>
                        <small className="todo-date">생성일: {todo.createdAt}</small>
                    </div>
                </div>
            ))}
        </div>   
    );
}