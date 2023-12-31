import { useState } from 'react'


function App() {
  // SetTodos -> por os dados
  // todos -> consultar
  const [todos, setTodos] = useState([
  {
    id: 1,
    text: "Criar Projeto",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Ir para academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Estudar React",
    category: "Pessoal",
    isCompleted: false,
  }

    ])
 return <div className='app'>
  <h1>Lista de Tarefas</h1>
  <div className='todo-list'>
    {todos.map((todo) => (
      <div className='todo'>
        <div className='content'>
          <p>{todo.text}</p>
        </div>
      </div>
    ))}
  </div>
  </div>
}

export default App