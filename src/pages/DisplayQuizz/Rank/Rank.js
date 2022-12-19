import React from 'react';
import {
    collection,
    query,
    onSnapshot,
} from 'firebase/firestore';
import { db } from '~/config/Firebase/firebase';

function App() {
    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        const q = query(collection(db, 'rank'));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({ ...doc.data(), id: doc.id });
            });
            setTodos(todosArray);
        });
        return () => unsub();
    }, []);

    return (
        <div className="App">
            <div className="todo_container">
                {todos.map((todo) => (
                    <div>
                        {todo.score}
                        {todo.userData.email}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default App;
