// src/component/TodoList.jsx (Read 전용)
export default function TodoLlist({ todos }) {
    // 메뉴판이 비었으면
    if (!todos.length) return <p>아직 아무것도 없어요 🙌</p>;

    // 메뉴판이 뭔가 있으면, 한 줄씩 리스트로 변환
    return (
        <ul>
            {todos.map((t) =>(
                <li key={t.id}>{t.text}</li>
            ))}
        </ul>
    );
}