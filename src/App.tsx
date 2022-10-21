import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/Main.css';

import Main from './Pages/Main'

// useState = shortcut for setters

// const App: React.FC = () => {

//   const [todo, setTodo] = useState<string>("");
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [clicker, setClicker] = useState(0);
//   const navigate = useNavigate();
//   const infoPage = () => navigate('./InfoPage')

//   const handleAdd = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (todo) {
//       setTodos([...todos, {id: Date.now(), todo, isDone: false}])

//       setTodo("");
//     }
//   }

//   return <div className="App">
//     <span className="heading">Taskify</span>
//     <p>hello world</p>
//     <button className="clicker" onClick={() => setClicker(clicker + 1)}>+1</button>
//     <button className="clickerdown" onClick={() => setClicker(clicker - 1)}>-1</button>
//     <p>{clicker}</p>
//     <a href="https://nextcloud.bargot.nl" className="page2"><img src="https://nextcloud.com/wp-content/uploads/2022/05/nextcloud-logo-300x300.png" alt="nextcloud logo" className="nextcloud" /></a>
//     <button onClick={infoPage}></button>
//     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
//     <TodoList todos={todos} setTodos={setTodos} />
//   </div>
// };

const App : React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </Router>
  )
}

export default App;